import Product from './product';

describe('Product unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Product('', '1', 150)).toThrow("Id cannot be empty");
  })
  it('Should throw when name is empty', () => {
    expect(() => new Product('1', '', 150)).toThrow("Name cannot be empty");
  });
  it('Should throw when price is 0 or less', () => {
    expect(() => new Product('1', '1', 0)).toThrow("Price cannot be 0 or less");
  });
  it('Should change name', () => {
    const product = new Product('1', 'Product 1', 150);
    product.changeName('Product 2');
    expect(product.name).toBe('Product 2');
  })
  it('Should throw when name is empty after change', () => {
    const product = new Product('1', 'Product 1', 150);
    expect(() => product.changeName('')).toThrow("Name cannot be empty");
  });
  it('Should change price', () => {
    const product = new Product('1', 'Product 1', 150);
    product.changePrice(200);
    expect(product.price).toBe(200);
  });
})