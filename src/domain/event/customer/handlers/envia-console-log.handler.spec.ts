import CustomerAddressChangedEvent from "../customer-address-changed.event";
import EnviaConsoleLogHandler from "./envia-console-log.handler";

describe('EnviaConsoleLogHandler', () => {
    it('should log "Endereço do cliente: {id}, {nome} alterado para: {endereco}"', () => {
      const handler = new EnviaConsoleLogHandler();
      const eventData = {
        id: "any_id",
        name: "any_name",
        address: {
          street: "any_street",
          number: 0,
          city: "any_city",
          zip: "any_zip",
          state: "any_state",
        },
      };
      const event = new CustomerAddressChangedEvent(eventData);
      const consoleSpy = jest.spyOn(console, "log");

      handler.handle(event);

      expect(consoleSpy).toHaveBeenCalledWith(
        `Endereço do cliente: ${eventData.id}, ${eventData.name} alterado para: ${eventData.address.street}, ${eventData.address.number}, ${eventData.address.city}, ${eventData.address.zip}, ${eventData.address.state}`
      );
    });
})