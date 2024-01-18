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
  }

  get total() {
    return this._items.reduce((total, item) => total + item.price, 0);
  }
}