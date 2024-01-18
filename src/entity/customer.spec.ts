import Customer from './customer';

describe('Customer unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Customer('', 'John Doe')).toThrow("Id cannot be empty");
  });
  it('Should throw when name is less than 2 characters', () => {
    expect(() => new Customer('1', 'J')).toThrow("Name must be at least 2 characters long");
  });
})