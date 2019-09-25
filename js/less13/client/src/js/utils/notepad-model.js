export default class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }
    static get Priority() {
      return  {LOW: 0, NORMAL: 1, HIGH: 2,};
  }
    get notes() {
      return this._notes;
    }
    findNoteById(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._notes.find(note => note.id === id);
          resolve(id);
        },300);
      });
    }
    saveNote(note) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._notes.push(note);
          resolve(note);
        }, 300);
      });
    }
    deleteNote(id) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this._notes = this._notes.filter(note => note.id !== id);
          resolve(id);
        }, 300);
      });
  };
    updateNoteContent(id, updatedContent) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.findNoteById(id).then(elem => {
            if (elem) Object.assign(elem, updatedContent);
          })
        },300);
      });
    }
    updateNotePriority(id, priority) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.findNoteById(id).then(note => {
            if(!note) return;
            note.priority = priority;
            resolve(note);
          })
        },300);
      });
    }
    filterNotesByQuery(query) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const queryToLower = query.toLowerCase();
          const res = this._notes.filter(note => note.body.toLowerCase().includes(queryToLower) || note.title.toLowerCase().includes(queryToLower));
          resolve(res);
        }, 300);
      }) 
    }
    filterNotesByPriority(priority) {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          this._notes.filter(note => note.priority === priority);
          reslove(priority);
        }, 300);
      });
    }
  };
  