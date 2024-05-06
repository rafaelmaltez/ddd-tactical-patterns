import OrderItem from './order_item';

export default class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];
  private _total: number = 0;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  get id() {
    return this._id;
  }

  get customerId() {
    return this._customerId;
  }

  get items() {
    return this._items;
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id cannot be empty");
    }
    if (this._customerId.length === 0) {
      throw new Error("CustomerId cannot be empty");
    }
    if (this._items.length === 0) {
      throw new Error("Items cannot be empty");
    }
  }

  total() {
    return this._items.reduce((total, item) => total + item.orderItemTotal(), 0);
  }
}