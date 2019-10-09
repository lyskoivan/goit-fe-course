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

export const getFetchCreateNote = ({title, body, priority}) => {
    const postToAdd = {
        title,
        body,
        priority
      };
    return fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(postToAdd),
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

export const getFetchUpdateeNote = ({id, title, body, priority}) => {
    const postToUpdate = {
        id,
        title,
        body,
        priority
      };
    return fetch(API_URL + id, {
        method: 'PATCH',
        body: JSON.stringify(postToUpdate),
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