import EventDispatchInterface from "./event-dispatcher.interface";
import EventHandlerInterface from "./event-handler.interface";
import EventInterface from "./event.interface";

export default class EventDispatcher implements EventDispatchInterface{
    private eventHandlers: {[eventName: string]: Set<EventHandlerInterface<EventInterface>>} = {};

    get getEventHandlers(): {[eventName: string]: Set<EventHandlerInterface<EventInterface>>} {
        return this.eventHandlers;
    }

    register(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = new Set();
        }
        this.eventHandlers[eventName].add(eventHandler);
    }

    notify(event: EventInterface): void {
        throw new Error("Method not implemented.");
    }

    unregister(eventName: string, eventHandler: EventHandlerInterface<EventInterface>): void {
        if (!this.eventHandlers[eventName]) {
            return;
        }
        this.eventHandlers[eventName].delete(eventHandler);
    }

    unregisterAll(): void {
        throw new Error("Method not implemented.");
    }
    
}