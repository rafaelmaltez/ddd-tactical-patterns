import EventInterface from "../@shared/event.interface";

type CustomerAddressChangedEventData = {
    id: string;
    name: string;
    address: {
        street: string;
        number: number;
        city: string;
        zip: string;
        state: string;
    };
};

export default class CustomerAddressChangedEvent implements EventInterface {
    dateTimeOccurred: Date;
    eventData: CustomerAddressChangedEventData;

    constructor(eventData: CustomerAddressChangedEventData) {
        this.dateTimeOccurred = new Date();
        this.eventData = eventData;
    }
}