import Order from '../../domain/entity/order';
import OrderItem from '../../domain/entity/order_item';
import OrderItemModel from '../db/sequelize/model/order-item.model';
import OrderModel from '../db/sequelize/model/order.model';

export default class OrderRepository {
  async create(entity: Order): Promise<void> {

    await OrderModel.create({
      id: entity.id,
      customer_id: entity.customerId,
      total: entity.total(),
      items: entity.items.map(item => ({
        id: item.id,
        order_id: entity.id,
        product_id: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity
      }))
    }, {
      include: [{ model: OrderItemModel, as: 'items' }]
    })

  }

  async find(id: string): Promise<Order> {
    const orderModel = await OrderModel.findOne({ where: { id }, include: ["items"] })
    if (!orderModel) throw new Error("Order not found!")
    const orderItems = orderModel.items.map((item) => new OrderItem(
      item.id,
      item.product_id,
      item.name,
      item.price, item.quantity
    ))
    const order = new Order(orderModel.id, orderModel.customer_id, orderItems)
    return order;
  }
}