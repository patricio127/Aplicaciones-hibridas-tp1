import { createContext, useContext, useState, useEffect } from "react";
import eventsApi from "../api/events.api";

export const EventsContext = createContext();

export function EventsProvider(props) {
    const [events, setEvents] = useState([]);


    const remove = (event) => {
        setEvents(events.filter(p => p.id !== event.id));
    }
    const add = async (event) => {
        const createdEvent = await eventsApi.create(event)
        setEvents([...events, createdEvent])
    }
    useEffect(()=>{
        async function eventGetApi(){
            console.log('context')
            const results = await eventsApi.getAll()
            setEvents(results)
        } 
        eventGetApi();
    },[])
    return (
        <EventsContext.Provider value={{ events: events, remove, add }}>
            {props.children}
        </EventsContext.Provider>
    );
}

export function useEvents() {
    console.log("function useEvents")
    const context = useContext(EventsContext);
    if (context === undefined) {
        throw new Error("useEvents must be used within a EventsProvider");
    }
    return context;
}
