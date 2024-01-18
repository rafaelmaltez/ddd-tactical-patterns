import Customer from './customer';

describe('Customer unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Customer('', 'John Doe')).toThrow("Id cannot be empty");
  })
})