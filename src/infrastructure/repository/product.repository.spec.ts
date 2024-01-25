import { Sequelize } from 'sequelize-typescript';
import ProductModel from '../db/sequelize/model/product.model';
import Product from '../../domain/entity/product';
import ProductRepository from './product.repository';

describe('Product repository tests', () => {

  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false,
      sync: { force: true },
    });
    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("Should create a product", async () => {
    const productRepository = new ProductRepository()
    const product = new Product("p1", "Product 01", 150)

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({ where: { id: "p1" } })

    expect(productModel.toJSON()).toStrictEqual({
      id: "p1",
      name: "Product 01",
      price: 150
    })
  });

  it("Should update a product", async () => {
    const productRepository = new ProductRepository()
    const product = new Product("p1", "Product 01", 150)

    await productRepository.create(product);
    product.changeName("Product 01 Updated")
    product.changePrice(200)
    await productRepository.update(product);

    const productModel = await ProductModel.findOne({ where: { id: "p1" } })

    expect(productModel.toJSON()).toStrictEqual({
      id: "p1",
      name: "Product 01 Updated",
      price: 200
    });
  });

  it("Should find a product", async () => {
    const productModel = await ProductModel.create({
      id: "p1",
      name: "Product 01",
      price: 150
    })
    const productRepository = new ProductRepository()
    const product = await productRepository.find("p1");
    expect(productModel.toJSON()).toStrictEqual({
      id: product.id,
      name: product.name,
      price: product.price
    });

  });

  it("Should find all products", async () => {
    0
    const product1 = await ProductModel.create({
      id: "p1",
      name: "Product 01",
      price: 150
    })
    const product2 = await ProductModel.create({
      id: "p2",
      name: "Product 02",
      price: 250
    });
    const productRepository = new ProductRepository()
    const products = await productRepository.findAll();
    expect(products).toHaveLength(2);
    expect(products[0].id).toBe(product1.id);
    expect(products[0].name).toBe(product1.name);
    expect(products[0].price).toBe(product1.price);
    expect(products[1].id).toBe(product2.id);
    expect(products[1].name).toBe(product2.name);
    expect(products[1].price).toBe(product2.price);
  })

})

