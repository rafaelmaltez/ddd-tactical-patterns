import Order from './order';

describe('Order unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Order('', '1', [])).toThrow("Id cannot be empty");
  })
})