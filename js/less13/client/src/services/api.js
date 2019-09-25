import { Notyf } from 'notyf';
import {NOTIFICATION_MESSAGES} from '../js/utils/constants.js';
const notyf = new Notyf();

const API_URL = 'http://localhost:3000/notes/';



export const getFetchNotes = () => {
    return fetch(API_URL)
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error' + response.statusText);
    })
    .catch((err) => {
        console.log(err);
    });
};
export const getFetchDeleteNote = id => {
    return fetch(API_URL + id, {
        method : 'DELETE',
    })
    .then((response) => {
        if (response.ok) {
            notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
            return response.json();
        }
        throw new Error('Error' + response.statusText);
    })
    .catch(err => console.log(err));
};

export const getFetchCreateNote = id => {
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(id),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (response.ok) {
            notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
            return response.json();
        }
        throw new Error('Error' + response.statusText);
    })
    .catch(err => console.log(err));

};

export const getFetchUpdateeNote = id => {
    return fetch(API_URL, {
        method: 'PATCH',
        body: JSON.stringify(id),
        headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      }})
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error' + response.statusText);
    })
    .catch(err => console.log(err));
};