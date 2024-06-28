import Customer from "./domain/entity/customer";
import CustomerAddressChangedEvent from "./domain/event/customer/customer-address-changed.event";
import CustomerCreatedEvent from "./domain/event/customer/customer-created.event";
import EventDispatcher from "./domain/event/@shared/event-dispatcher";
import EnviaConsoleLogHandler from "./domain/event/customer/handlers/envia-console-log.handler";
import EnviaConsoleLog1Handler from "./domain/event/customer/handlers/envia-console-log-1.handler";
import EnviaConsoleLog2Handler from "./domain/event/customer/handlers/envia-console-log-2.handler";
import Address from "./domain/entity/address";



const eventDispatcher = EventDispatcher.create();
eventDispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog1Handler());
eventDispatcher.register("CustomerCreatedEvent", new EnviaConsoleLog2Handler());
eventDispatcher.register("CustomerAddressChangedEvent", new EnviaConsoleLogHandler());

const customer = new Customer('any_id', 'any_name')

eventDispatcher.notify(new CustomerCreatedEvent({
    id: customer.id,
    name: customer.name,
    email: 'any_email',
    rewardPoints: 0,
    active: false,
}));
const address = new Address('any_street', 0, 'any_city', 'any_zip', 'any_state');
customer.changeAddress(address);
eventDispatcher.notify(new CustomerAddressChangedEvent({
    id: customer.id,
    name: customer.name,
    address: {
        street: address.street,
        number: address.number,
        city: address.city,
        zip: address.zip,
        state: address.state,
    }
}));