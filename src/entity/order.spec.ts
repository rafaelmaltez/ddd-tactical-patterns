import Order from './order';
import OrderItem from './order_item';

describe('Order unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Order('', '1', [])).toThrow("Id cannot be empty");
  });
  it('Should throw when customerId is empty', () => {
    expect(() => new Order('1', '', [])).toThrow("CustomerId cannot be empty");
  });
  it('Should throw when items is empty', () => {
    expect(() => new Order('1', '1', [])).toThrow("Items cannot be empty");
  });
  it('Should calculate total', () => {
    const item1 = new OrderItem('1', 'item1', 10);
    const item2 = new OrderItem('2', 'item2', 20);
    const order = new Order('1', '1', [item1, item2]);
    expect(order.total()).toBe(30);
  })
})