import { createContext, useContext, useState, useEffect } from "react";
import eventsApi from "../api/events.api";

export const EventsContext = createContext();

export function EventsProvider(props) {
    const [events, setEvents] = useState([]);


    const remove = async(event) => {
        try{
            const result = await eventsApi.deleteEvent(event._id)
            setEvents(events.filter(p => p._id !== event._id));
            return Promise.resolve()
        } catch(e){
            return Promise.reject(e)
        }
    }
    const add = async (event) => {
        try{
            const createdEvent = await eventsApi.create(event)
            setEvents([...events, createdEvent])
            return Promise.resolve(createdEvent)
        } catch(e){
            return Promise.reject(e)
        }
        

        
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
