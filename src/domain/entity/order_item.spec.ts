import OrderItem from './order_item';

describe('OrderItem unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new OrderItem('', 'p1', 'item1', 10, 1)).toThrow("Id cannot be empty");
  });
  it('Should throw when productId is empty', () => {
    expect(() => new OrderItem('1', '', 'item1', 10, 1)).toThrow("ProductId cannot be empty");
  });
  it('Should throw when name is empty', () => {
    expect(() => new OrderItem('1', 'p1', '', 10, 1)).toThrow("Name cannot be empty");
  });
  it('Should throw when price is 0 or less', () => {
    expect(() => new OrderItem('1', 'p1', 'item1', 0, 1)).toThrow("Price cannot be 0 or less");
  });
  it('Should throw when quantity is 0 or less', () => {
    expect(() => new OrderItem('1', 'p1', 'item1', 10, 0)).toThrow("Quantity cannot be 0 or less");
  });
  it('Should calculate order item total', () => {
    const orderItem = new OrderItem('1', 'p1', 'item1', 10, 2);
    expect(orderItem.orderItemTotal()).toBe(20);
  });
})