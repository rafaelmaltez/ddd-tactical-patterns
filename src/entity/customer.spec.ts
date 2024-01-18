import Address from './address';
import Customer from './customer';

describe('Customer unit tests', () => {
  it('Should throw when id is empty', () => {
    expect(() => new Customer('', 'John Doe')).toThrow("Id cannot be empty");
  });
  it('Should throw when name is less than 2 characters', () => {
    expect(() => new Customer('1', 'J')).toThrow("Name must be at least 2 characters long");
  });
  it("Should change name", () => {
    const customer = new Customer('1', 'John Doe');
    customer.changeName('Jane Doe');
    expect(customer.name).toBe('Jane Doe');
  });
  it("Should activate customer", () => {
    const customer = new Customer('1', 'John Doe');
    const address = new Address('Street 1', 1, '12345', 'New York', 'US');
    customer.address = address;
    customer.activate();
    expect(customer.isActive()).toBe(true);
  });
})