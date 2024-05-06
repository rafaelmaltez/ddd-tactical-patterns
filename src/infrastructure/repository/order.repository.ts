import Order from '../../domain/entity/order';
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
}