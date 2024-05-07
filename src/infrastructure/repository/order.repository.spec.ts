import { Sequelize } from 'sequelize-typescript';
import Address from '../../domain/entity/address';
import Customer from '../../domain/entity/customer';
import CustomerModel from '../db/sequelize/model/customer.model';
import CustomerRepository from './customer.repository';
import OrderModel from '../db/sequelize/model/order.model';
import OrderItemModel from '../db/sequelize/model/order-item.model';
import Order from '../../domain/entity/order';
import Product from '../../domain/entity/product';
import OrderItem from '../../domain/entity/order_item';
import ProductRepository from './product.repository';
import OrderRepository from './order.repository';
import ProductModel from '../db/sequelize/model/product.model';

describe("Order repository tests", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([CustomerModel, OrderModel, OrderItemModel, ProductModel]);
    await sequelize.sync();
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create an order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "S1");
    customer.address = address;
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem("1", product.id, product.name, product.price, 2)

    const orderRepository = new OrderRepository();
    const order = new Order("123", "123", [orderItem]);

    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: {
        id: order.id
      },
      include: ["items"]
    });
    expect(orderModel.toJSON()).toStrictEqual({
      id: "123",
      customer_id: "123",
      total: 20,
      items: [
        {
          id: orderItem.id,
          product_id: orderItem.productId,
          price: orderItem.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          name: orderItem.name
        }
      ]
    });
  })

  it("Should find an order by its id", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "S1");
    customer.address = address;
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem("1", product.id, product.name, product.price, 2)

    const orderRepository = new OrderRepository();
    const order = new Order("123", "123", [orderItem]);

    await orderRepository.create(order);

    const foundOrder = await orderRepository.find("123")
    expect(foundOrder instanceof Order).toBeTruthy()
    expect(foundOrder.id).toEqual(order.id)
    expect(foundOrder.customerId).toEqual(customer.id)
    expect(foundOrder.items.length).toEqual(1)
    expect(foundOrder.items[0]).toEqual(orderItem)
  })


  it("Should throw if no order is found", async () => {
    const orderRepository = new OrderRepository()
    await expect(orderRepository.find("InexistentId")).rejects.toThrow("Order not found")
  })

  it("Should update an order", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "S1");
    customer.address = address;
    await customerRepository.create(customer);

    const productRepository = new ProductRepository();
    const product = new Product("1", "Product 1", 10);
    await productRepository.create(product);

    const orderItem = new OrderItem("1", product.id, product.name, product.price, 2)

    const orderRepository = new OrderRepository();
    const order = new Order("123", "123", [orderItem]);

    await orderRepository.create(order);
    const newProduct = new Product("2", "Product 2", 20);
    await productRepository.create(newProduct);

    const newOrderItem = new OrderItem("2", newProduct.id, newProduct.name, newProduct.price, 5)
    order.addItem(newOrderItem)

    await orderRepository.update(order)

    const updatedOrder = await orderRepository.find(order.id)

    expect(updatedOrder.items.length).toEqual(2)
    expect(updatedOrder.items[1]).toEqual(newOrderItem)
    expect(updatedOrder.total()).toEqual(120)
  })


  it("Should find all orders", async () => {
    const customer = new Customer("123", "Customer 1");
    const address = new Address("Street 1", 1, "Zipcode 1", "City 1", "S1");
    customer.address = address;
    const customerRepository = new CustomerRepository();
    await customerRepository.create(customer);

    const product = new Product("1", "Product 1", 10);
    const productRepository = new ProductRepository();
    await productRepository.create(product);

    const orderItem = new OrderItem("1", product.id, product.name, product.price, 2)
    const order1 = new Order("123", "123", [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order1);

    const orderItem2 = new OrderItem("2", product.id, product.name, product.price, 2)
    const order2 = new Order("456", "123", [orderItem2]);
    await orderRepository.create(order2);

    const orderItem3 = new OrderItem("3", product.id, product.name, product.price, 2)
    const order3 = new Order("789", "123", [orderItem3]);
    await orderRepository.create(order3);

    const orders = await orderRepository.findAll();

    expect(orders.length).toEqual(3);
    expect(orders[0]).toEqual(order1);
    expect(orders[1]).toEqual(order2);
    expect(orders[2]).toEqual(order3);
  });


});