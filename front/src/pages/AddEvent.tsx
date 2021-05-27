import { useState, useEffect } from 'react';
import EventModel from '../models/event';
import ProfileModel from '../models/profile';

const AddEvent = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [creator, setCreator] = useState('1')
    const [measurement, setMeasurement] = useState('Time')
    const [direction, setDirection] = useState('Low')
    const [profiles, setProfiles] = useState<any[]>([])

    useEffect(() => {
        populate()
    }, [])

    const populate = async () => {
        let creators = await ProfileModel.all()
        setProfiles(creators)
    }

    const submit = () => {
        let formInfo = {
            title,
            description,
            creator,
            measurement,
            performance_direction: direction
        }
        EventModel.create(formInfo)
    }

    return(
        <>
            <h1>add an event here</h1>
            <input type="text" value={title} onChange={e => setTitle(e.target.value) } />
            <input type="text" value={description} onChange={e => setDescription(e.target.value) } />
            <select value={creator} onChange={e => setCreator(e.target.value)}>
                {profiles.map(item => {
                    return(
                        <option value={item.id}>{item.name}</option>
                    )
                })}
            </select>
            <select value={measurement} onChange={e => setMeasurement(e.target.value)}>
                <option value='Time'>Time</option>
                <option value='Number'>Number</option>
            </select>
            <select value={direction} onChange={e => setDirection(e.target.value)}>
                <option value='Low'>Low</option>
                <option value='High'>High</option>
            </select>
            <button onClick={() => submit()}>Submit</button>\

        </>
    )
}

export default AddEvent
