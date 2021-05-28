import { useState, useEffect } from 'react';
import EventModel from '../models/event';

const ShowEvent = (props:any) => {
    const [event, setEvent] = useState<object | null>(null)

    const fill = async () => {
        let gotten = await EventModel.getOne(props.match.params.eventid)
        setEvent(gotten)
    }

    useEffect(() => {
        fill()
        console.log(props)
    }, [])

    return(
        <>
            <h1>this is a show event page</h1>
            {JSON.stringify(event)}
        </>
    )
}

export default ShowEvent
