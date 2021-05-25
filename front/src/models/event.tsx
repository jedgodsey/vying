let url: string = 'http://localhost:8000/events/';

class EventModel {
    static all() {
        return fetch(url)
            .then(res => res.json())
            .catch(err => {
                console.log('error fetching data in EventModel.all: ', err)
                return {object: []}
            })
    }

    static getOne(id: number) {
        return fetch(`${url}/${id}/`)
            .then(res => res.json())
            .catch(err => {
                console.log('error getting item in EventModel.getOne: ', err)
                return {profile: {}}
            })
    }

    static create(newEvent: object) {
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newEvent),
            credentials: 'include'
        })
            .then(res => window.location.href = '/dashboard') //return new object instead?
    }

    static update(updatedEvent: any) {
        return fetch(`${url}/${updatedEvent.id}/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedEvent),
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => {
                console.log('error updating item in EventModel.update: ', err)
                return {message: 'error in update'}
            })
            .then(res => window.location.href = '/dashboard') //where to redirect to?
    }

    static delete(id: number) {
        fetch(`${url}/${id}/`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => res) //is this correct?
            .catch(err => {
                console.log('error deleting event in EventModel.delete: ', err)
                return {message: 'error in delete'}
            })
            // .then(res => res.status === 200 ? window.location.href = '/': null)
    }
}

export default EventModel
