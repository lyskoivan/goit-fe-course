import * as api from '../../services/api.js';

export default class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }
    static get Priority() {
      return  {LOW: 0, NORMAL: 1, HIGH: 2,};
    }
    get() {
      return api.getFetchNotes().then( notes => { 
        this._notes = notes; 
        return this._notes;
      })
      .catch(err => console.log(err));
      }
    findNoteById(id) {
      return new Promise((resolve, reject) => {
          this._notes.find(note => note.id === id);
          resolve(id);
      });
    }
    saveNote(note) {
      return api.getFetchCreateNote(note).then(note => {
      this._notes.push(note);
      return note;
      })
      .catch(err => console.log(err));
    }
    deleteNote(id) {
      return api.getFetchDeleteNote(id).then(() => {
        this._notes = this._notes.filter(note => note.id !== id);
        return id;
      });
    };
    updateNoteContent(id, updatedContent) {
      return api.getFetchUpdateeNote(updatedContent).then(elem => {
        this.findNoteById(id).then(elem => {
          if (elem) Object.assign(elem, updatedContent);
      })
      });
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
  