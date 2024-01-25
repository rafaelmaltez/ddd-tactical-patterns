import Order from '../entity/order';

export default class OrderService {
  static total(orders: Order[]) {
    let total = 0;
    orders.forEach(order => {
      total += order.total();
    });

    return total;
  }
}