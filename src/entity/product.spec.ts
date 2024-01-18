import Product from './product';

describe('Product unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Product('', '1', 150)).toThrow("Id cannot be empty");
  })
})