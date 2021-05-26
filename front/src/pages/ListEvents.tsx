import { useState, useEffect } from 'react';
import EventModel from '../models/event'

const ListEvents: React.FC = () => {
    let [ events, setEvents ] = useState<any[]>([])

    const fill = async () => {
        await EventModel.all().then(data => {
            setEvents(data)
        })
    }
    
    useEffect(() => {      
        fill();
    }, [])
    return(
        <>
            <h1>These are all the events</h1>
            <ul>
            {events && events.map(item => {
                return(
                    <li>{item.title}  {item.description}</li>
                )
            })}
            </ul>
        </>
    )
}

export default ListEvents
