let url: string = 'http://localhost:8000/performances/';

class PerformanceModel {
    static all() {
        return fetch(url)
            .then(res => res.json())
            .catch(err => {
                console.log('error fetching data in PerformanceModel.all: ', err)
                return {object: []}
            })
    }

    static getOne(id: number) {
        return fetch(`${url}/${id}/`)
            .then(res => res.json())
            .catch(err => {
                console.log('error getting item in PerformanceModel.getOne: ', err)
                return {profile: {}}
            })
    }

    static create(newPerformance: object) {
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newPerformance),
            credentials: 'include'
        })
            .then(res => window.location.href = '/dashboard') //return new object instead?
    }

    static update(updatedPerformance: any) {
        return fetch(`${url}/${updatedPerformance.id}/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedPerformance),
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => {
                console.log('error updating item in PerformanceModel.update: ', err)
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
                console.log('error deleting performance in PerformanceModel.delete: ', err)
                return {message: 'error in delete'}
            })
            // .then(res => res.status === 200 ? window.location.href = '/': null)
    }
}

export default PerformanceModel
