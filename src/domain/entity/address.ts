export default class Address {

  private _street: string;
  private _number: number;
  private _city: string;
  private _zip: string;
  private _state: string;

  constructor(street: string, number: number, zip: string, city: string) {
    this._street = street;
    this._number = number;
    this._city = city;
    this._zip = zip;
    this.validate();
  }

  get street(): string {
    return this._street;
  }

  get number(): number {
    return this._number;
  }

  get zip(): string {
    return this._zip;
  }

  get city(): string {
    return this._city;
  }

  validate() {
    if (this._street.length < 2) {
      throw new Error("Street must be at least 2 characters long");
    }
    if (this._number < 0) {
      throw new Error("Number must be positive");
    }
    if (this._city.length < 2) {
      throw new Error("City must be at least 2 characters long");
    }
    if (this._zip.length < 2) {
      throw new Error("Zip must be at least 2 characters long");
    }
    if (this._state.length < 2) {
      throw new Error("State must be at least 2 characters long");
    }
  }
}