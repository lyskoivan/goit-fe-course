import { Notyf } from 'notyf';
import MicroModal from 'micromodal';
import Notepad from './utils/notepad-model.js';
import {PRIORITY_TYPES, refs, NOTIFICATION_MESSAGES} from './utils/constants.js';
import {createProductCard, createProductListMarkup, getStorageNotes} from './utils/view.js';
const shortid = require('shortid');
const notyf = new Notyf();

const notepad = new Notepad(getStorageNotes());
console.log(notepad);

const handleOpenModal = () => {
  MicroModal.show('note-editor-modal');
};

const generateNote = (title, body) => {
  const newNote = {
    id : shortid.generate(),
    title : title,
    body : body,
    priority: PRIORITY_TYPES.LOW,
  };
  notepad.saveNote(newNote).then(savedNote => {
    refs.noteListRef.insertAdjacentHTML('beforeend', createProductCard(savedNote));
    localStorage.setItem('items', JSON.stringify(notepad.notes));
  });

};

const handleCreateForm = (event) => {
  event.preventDefault()
  let title = refs.formInput.value;
  let body = refs.formTextarea.value;
  if (body === '' || title === '')  return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY);
  generateNote(title, body);
  refs.formInput.value = '';
  refs.formTextarea.value = '';
  MicroModal.close('note-editor-modal');
  notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS);
};

const removeListItem = (item) => {
  notepad.deleteNote(item.dataset.id).then(remNote => {
    item.remove();
    localStorage.setItem('items', JSON.stringify(notepad.notes));
  });
};

const handleRemoveNote = ({target}) => {
  if (target.tagName !== 'I' || target.textContent !== 'delete') return;
  removeListItem(target.closest('li'));
  notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
};

const handleFilterList = ({target}) => {
  notepad.filterNotesByQuery(target.value).then((res) => createProductListMarkup(res));
};

MicroModal.init();
refs.modalButton.addEventListener('click', handleOpenModal);
refs.form.addEventListener('submit', handleCreateForm);
refs.noteListRef.addEventListener('click', handleRemoveNote);
refs.filterInput.addEventListener('input', handleFilterList);