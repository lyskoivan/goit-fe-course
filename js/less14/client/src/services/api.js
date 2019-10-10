import { Notyf } from 'notyf';
import {NOTIFICATION_MESSAGES} from '../js/utils/constants.js';
const notyf = new Notyf();

const API_URL = 'http://localhost:3000/notes/';

export const getFetchNotes = async () => {
    try {
        const response = await fetch(API_URL);
        const data = response.json();
        return data;
    }
    catch (err) {
        throw err;
    }
}

export const getFetchDeleteNote =  async id => {
    try {
        const response = await fetch(API_URL + id, {
            method : 'DELETE',
        });
        notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
        const data = response.json()
        return data;
    } 
    catch(err) {
        throw err;
    }
}

export const getFetchCreateNote = async (postToAdd) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            body: JSON.stringify(postToAdd),
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
        });
        notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
        const data = response.json();
        return data;
      }
    catch(err) { 
        throw err;
      }
};

export const getFetchUpdateeNote = async (postToUpdate) => {
      try {
          const response = await fetch(API_URL + id, {
            method: 'PATCH',
            body: JSON.stringify(postToUpdate),
            headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          }});
          const data = response.json();
          return data;
      }
      catch(err) {
          throw err;
      }
};