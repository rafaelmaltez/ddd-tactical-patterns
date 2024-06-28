import EventInterface from "../@shared/event.interface";

type CustomerCreatedEventData = {
  id: string;  
  name: string;
  email: string;
  rewardPoints: number;
  active: boolean;
  address: {
    street: string;
    number: number;
    city: string;
    zip: string;
    state: string;
  };
};


export default class CustomerCreatedEvent implements EventInterface {
    dateTimeOccurred: Date;
    eventData: CustomerCreatedEventData;

    constructor(eventData: CustomerCreatedEventData) {
        this.dateTimeOccurred = new Date();
        this.eventData = eventData;
    }
}