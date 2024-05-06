import Address from './address';

export default class Customer {

	private _id: string;
	private _name: string;
	private _address!: Address;
	private _active: boolean = false;
	private _rewardPoints: number = 0;


	constructor(id: string, name: string) {
		this._id = id;
		this._name = name;
		this.validate();
	}

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}

	get rewardPoints() {
		return this._rewardPoints;
	}

	get address() {
		return this._address;
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

	changeAddress(address: Address) {
		this._address = address;
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

	isActive() {
		return this._active;
	}

	set address(address: Address) {
		this._address = address;
	}

	addRewardPoints(points: number) {
		this._rewardPoints += points;
	}
}
