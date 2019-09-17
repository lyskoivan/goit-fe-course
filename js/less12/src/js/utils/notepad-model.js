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
      return this._notes.find(note => note.id === id);
    }
    saveNote(note) {
      this._notes.push(note);
      return note;
    }
    deleteNote(id) {
      const noteId = this._notes.indexOf(this.findNoteById(id));
      this._notes.splice(noteId, 1);
    }
    updateNoteContent(id, updatedContent) {
      const elem = this.findNoteById(id);
      if (elem) {
        Object.assign(elem, updatedContent);
      }
    }
    updateNotePriority(id, priority) {
      const note = this.findNoteById(id);
      if(!note) return;
      note.priority = priority;
      return note;
    }
    filterNotesByQuery(query) {
      const queryToLower = query.toLowerCase();
      return this._notes.filter(note => note.body.toLowerCase().includes(queryToLower) || note.title.toLowerCase().includes(queryToLower));
    }
    filterNotesByPriority(priority) {
      return this._notes.filter(note => note.priority === priority);
    }
  };
  