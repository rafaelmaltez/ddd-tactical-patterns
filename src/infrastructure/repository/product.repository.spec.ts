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

})

