import Product from '../../domain/entity/product';
import ProductRepositoryInterface from '../../domain/repository/product.repository.interface';
import ProductModel from '../db/sequelize/model/product.model';

export default class ProductRepository implements ProductRepositoryInterface {
  async create(entity: Product): Promise<void> {

    await ProductModel.create({
      id: entity.id,
      name: entity.name,
      price: entity.price
    })
  }

  async update(entity: Product): Promise<void> {
    const product = await ProductModel.findOne({ where: { id: entity.id } })
    if (!product) {
      throw new Error("Product not found")
    }

    await product.update({
      name: entity.name,
      price: entity.price
    })



  }
  find(id: string): Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

}