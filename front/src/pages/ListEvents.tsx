import { useState } from 'react';
import EventModel from '../models/event'

const ListEvents = () => {
    let [ events, setEvents ] = useState([])

    const fill = async () => {
        await EventModel.all().then(data => {
            console.log(data)
        })
    }
    return(
        <>
            <h1>These are all the events</h1>
            {fill()}
        </>
    )
}

export default ListEvents
