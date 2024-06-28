import CustomerCreatedEvent from "../customer-created.event";
import EnviaConsoleLog1Handler from "./envia-console-log-1.handler";

describe('EnviaConsoleLog1Handler', () => {
    it('should log "Esse é o primeiro console.log do evento: CustomerCreated"', () => {
        const handler = new EnviaConsoleLog1Handler();
        const event = new CustomerCreatedEvent({
            id: 'any_id',
            name: 'any_name',
            email: 'any_email',
            rewardPoints: 0,
            active: true,
            address: {
                street: 'any_street',
                number: 0,
                city: 'any_city',
                zip: 'any_zip',
                state: 'any_state',
            },
        });
        const consoleSpy = jest.spyOn(console, 'log');

        handler.handle(event);

        expect(consoleSpy).toHaveBeenCalledWith('Esse é o primeiro console.log do evento: CustomerCreated');
    })
})