import Notepad from './utils/notepad-model.js';
import  initialNotes from '../assets/notes.json';
import {PRIORITY_TYPES, refs} from './utils/constants.js';
import {createListItem, renderNoteList} from './utils/view.js';
const shortid = require('shortid');

const notepad = new Notepad(initialNotes);

const generateNote = (title, body) => {
  const newNote = {
    id : shortid.generate(),
    title : title,
    body : body,
    priority: PRIORITY_TYPES.LOW,
  };
  notepad.saveNote(newNote);
  refs.noteListRef.append(createListItem(newNote));
}

const handleCreateForm = (event) => {
  event.preventDefault()
  let title = refs.formInput.value;
  let body = refs.formTextarea.value;
  if (body === '' || title === '')  return alert('Необходимо заполнить все поля!');
  generateNote(title, body);
  refs.formInput.value = '';
  refs.formTextarea.value = '';
};

const removeListItem = (item) => {
  notepad.deleteNote(item.dataset.id);
  item.remove();
};

const handleRemoveNote = ({target}) => {
  if (target.tagName !== 'I' || target.textContent !== 'delete') return;
  removeListItem(target.closest('li'));
};

const handleFilterList = ({target}) => {
  refs.noteListRef.innerHTML = '';
  renderNoteList(refs.noteListRef, notepad.filterNotesByQuery(target.value));
};


refs.form.addEventListener('submit', handleCreateForm);
refs.noteListRef.addEventListener('click', handleRemoveNote);
refs.filterInput.addEventListener('input', handleFilterList);