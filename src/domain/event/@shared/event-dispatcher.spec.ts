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
    it("Should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);
        eventDispatcher.unregister("ProductCreated", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeDefined()
        expect(eventDispatcher.getEventHandlers["ProductCreated"].size).toBe(0)
        expect(eventDispatcher.getEventHandlers["ProductCreated"]).not.toContain(eventHandler)
    })
    it("Should not register duplicated handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);
        eventDispatcher.register("ProductCreated", eventHandler);

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeDefined()
        expect(eventDispatcher.getEventHandlers["ProductCreated"].size).toBe(1)
        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toContain(eventHandler)
    })
    it("Should unregister all handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();

        eventDispatcher.register("ProductCreated", eventHandler);
        eventDispatcher.unregisterAll();

        expect(eventDispatcher.getEventHandlers["ProductCreated"]).toBeUndefined()
        expect(eventDispatcher.getEventHandlers).toEqual({})
    })

})