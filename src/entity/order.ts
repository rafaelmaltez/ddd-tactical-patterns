import OrderItem from './order_item';

export default class Order {
  _id: string;
  _customerId: string;
  _items: OrderItem[];
  _total: number = 0;

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;
    this._total = this.total();
    this.validate();
  }

  validate() {
    if (this._id.length === 0) {
      throw new Error("Id cannot be empty");
    }
    if (this._customerId.length === 0) {
      throw new Error("CustomerId cannot be empty");
    }
  }

  total() {
    return this._items.reduce((total, item) => total + item.price, 0);
  }
}