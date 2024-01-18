export default class Product {
  private _id: string;
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
    this.validate();
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  get price() {
    return this._price;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id cannot be empty");
    }
    if (this._name.length === 0) {
      throw new Error("Name cannot be empty");
    }
    if (this._price <= 0) {
      throw new Error("Price cannot be 0 or less");
    }
  }
}