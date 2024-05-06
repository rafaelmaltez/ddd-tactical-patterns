export default class OrderItem {

  private _id: string;
  private _productId: string;
  private _name: string;
  private _price: number;
  private _quantity: number;

  constructor(id: string, productId: string, name: string, price: number, quantity: number) {
    this._id = id;
    this._productId = productId;
    this._name = name;
    this._price = price;
    this._quantity = quantity;
    this.validate();
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  get productId() {
    return this._productId;
  }

  orderItemTotal() {
    return this._price * this._quantity;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id cannot be empty");
    }
    if (this._productId.length === 0) {
      throw new Error("ProductId cannot be empty");
    }
    if (this._name.length === 0) {
      throw new Error("Name cannot be empty");
    }
    if (this._price <= 0) {
      throw new Error("Price cannot be 0 or less");
    }
    if (this._quantity <= 0) {
      throw new Error("Quantity cannot be 0 or less");
    }
  }
}