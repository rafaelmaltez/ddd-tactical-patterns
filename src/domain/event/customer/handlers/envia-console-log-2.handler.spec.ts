import CustomerCreatedEvent from "../customer-created.event";
import EnviaConsoleLog2Handler from "./envia-console-log-2.handler";

describe('EnviaConsoleLog2Handler', () => {
    it('should log "Esse é o segundo console.log do evento: CustomerCreated"', () => {
        const handler = new EnviaConsoleLog2Handler();
        const event = new CustomerCreatedEvent({
          id: "any_id",
          name: "any_name",
          email: "any_email",
          rewardPoints: 0,
          active: true,
        });
        const consoleSpy = jest.spyOn(console, 'log');

        handler.handle(event);

        expect(consoleSpy).toHaveBeenCalledWith('Esse é o segundo console.log do evento: CustomerCreated');
    })
})