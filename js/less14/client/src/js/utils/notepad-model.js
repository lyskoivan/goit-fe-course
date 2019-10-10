import * as api from '../../services/api.js';

export default class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }
    static get Priority() {
      return  {LOW: 0, NORMAL: 1, HIGH: 2,};
    }
    async get() {
      try {
        const response = await api.getFetchNotes();
        const data = this._notes = response;
        return data;
      }
      catch(err) {
        throw err;
      }
  }
    findNoteById(id) {
      return new Promise((resolve, reject) => {
          this._notes.find(note => note.id === id);
          resolve(id);
      });
    }
    async saveNote(note) {
      try {
        const response = await api.getFetchCreateNote(note);
        this._notes.push(response);
        return response;
      }
      catch(err) {
        throw err;
      }
    }
    async deleteNote(id) {
      try {
        const response = await api.getFetchDeleteNote(id);
        this._notes = this._notes.filter(note => note.id !== id);
        return id;
      }
      catch(err) {
        throw err;
      }
    }
    async updateNoteContent(id, updatedContent) {
      try {
        const response = await api.getFetchUpdateeNote(updatedContent);
        this.findNoteById(id).then(elem => {
          if (elem) Object.assign(elem, updatedContent);
      })
      return response;
      }
      catch(err) {
        throw err;
      }
    }
    updateNotePriority(id, priority) {
      return new Promise((resolve, reject) => {
          this.findNoteById(id).then(note => {
            if(!note) return;
            note.priority = priority;
            resolve(note);
          })
      });
    }
    filterNotesByQuery(query) {
      return new Promise((resolve, reject) => {
          const queryToLower = query.toLowerCase();
          const res = this._notes.filter(note => note.body.toLowerCase().includes(queryToLower) || note.title.toLowerCase().includes(queryToLower));
          resolve(res);
      }) 
    }
    filterNotesByPriority(priority) {
      return new Promise((reslove, reject) => {
          this._notes.filter(note => note.priority === priority);
          reslove(priority);
      });
    }
  };
  