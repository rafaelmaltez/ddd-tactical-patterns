import Customer from '../entity/customer';
import Order from '../entity/order';
import OrderItem from '../entity/order_item'
import OrderService from './order.service';

describe('Order service unit tests', () => {
  it('Should calculate the total of all orders', () => {
    const item1 = new OrderItem('oi1', 'p1', 'item1', 10, 1);
    const item2 = new OrderItem('oi2', 'p2', 'item2', 20, 3);

    const order = new Order('o1', 'c1', [item1]);
    const order2 = new Order('o2', 'c2', [item2]);

    const total = OrderService.total([order, order2]);

    expect(total).toBe(70);
  });

  it('Should add reward points to customer when order is placed', () => {
    const customer = new Customer('c1', 'customer1');

    const item1 = new OrderItem('oi1', 'p1', 'item1', 10, 1);
    const item2 = new OrderItem('oi2', 'p2', 'item2', 20, 3);

    const order = OrderService.placeOrder(customer, [item1, item2]);

    expect(customer.rewardPoints).toBe(35);
    expect(order.total()).toBe(70)
  });
})