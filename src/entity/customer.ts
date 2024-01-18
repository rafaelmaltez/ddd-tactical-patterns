import Address from './address';

export default class Customer {

	_id: string;
	_name: string;
	_address!: Address;
	_active: boolean = false;

	constructor(id: string, name: string) {
		this._id = id;
		this._name = name;
		this.validate();
	}

	get name() {
		return this._name;
	}

	validate() {
		if (this._id.length === 0) {
			throw new Error("Id cannot be empty");
		}
		if (this._name.length < 2) {
			throw new Error("Name must be at least 2 characters long");
		}

	}

	changeName(newName: string) {
		this._name = newName;
	}

	activate() {
		if (!this._address) {
			throw new Error("Address is mandatory to activate customer");
		}
		this._active = true;
	}

	deactivate() {
		this._active = false;
	}
	set address(address: Address) {
		this._address = address;
	}
}
