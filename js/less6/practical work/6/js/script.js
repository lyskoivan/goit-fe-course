'use strict'
class Notepad {
  constructor(notes = []) {
    this._notes = notes;
    }
    static get Priority() {
      return  {LOW: 0, NORMAL: 1, HIGH: 2,};
  }
}
const notepad = new Notepad('initialNotes');


console.log(Notepad.Priority.NORMAL);
