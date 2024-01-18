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
})