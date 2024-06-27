import SendEmailWhenProductIsCreatedHandler from "../product/handler/send-email-when-product-is-created.handler";
import EventDispatcher from "./event-dispatcher";

describe("Domain events unit tests", () => {
    it("Should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeDefined()
        expect(eventDispatcher.getEventHandlers["ProductCreated"].size).toBe(1)
        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toContain(eventHandler)
        
    })
})