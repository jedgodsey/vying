let url: string = 'http://localhost:8000/profiles';

class ProfileModel {
    static all() {
        return fetch(url)
            .then(res => res.json())
            .catch(err => {
                console.log('error fetching data in ProfileModel.all: ', err)
                return {object: []};
            })
    }

    static getOne(id: number) {
        return fetch(`${url}/${id}/`)
            .then(res => res.json())
            .catch(err => {
                console.log('error getting item in ProfileModel.getOne: ', err)
                return {profile: {}}
            })
    }

    static create(newProfile: object) {
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newProfile),
            credentials: 'include'
        })
            .then(res => window.location.href = '/dashboard')
    }

    static update(updatedProfile: any) {
        return fetch(`${url}/${updatedProfile.id}/`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(updatedProfile),
            credentials: 'include'
        })
            .then(res => res.json())
            .catch(err => {
                console.log('error updating profile in ProfileModel.update: ', err)
                return {message: 'error in update'}
            })
            .then(res => window.location.href = '/dashboard')
    }

    static delete(id: number) {
        fetch(`${url}/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => res)
            .catch(err => {
                console.log('error deleting profile in ProfileModel.delete: ', err)
                return {message: 'error in delete'}
            })
            // .then(res => res.status === 200 ? window.location.href = '/': null)
    }
}

export default ProfileModel
