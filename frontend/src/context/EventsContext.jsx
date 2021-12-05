import { createContext, useContext, useState, useEffect } from "react";
import eventsApi from "../api/events.api";

const EventsContext = createContext();

export function EventsProvider(props) {
    const [events, setEvents] = useState();


    const remove = (event) => {
        setEvents(events.filter(p => p.id !== event.id));
    }
    const add = (event) => {
        setEvents(events.filter(p => p.id !== event.id));
    }
    useEffect(async function(){
        console.log('context')
        const eventos = await eventsApi.getAll()
        setEvents(eventos)
    },[])

    return (
        <EventsContext.Provider value={{ events: events, remove, add }}>
            {props.children}
        </EventsContext.Provider>
    );
}

export function useEvents() {
    const context = useContext(EventsContext);
    if (context === undefined) {
        throw new Error("useEvents must be used within a EventsProvider");
    }
    return context;
}