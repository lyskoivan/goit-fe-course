import {ICON_TYPES, NOTE_ACTIONS, refs} from './constants.js';
import  initialNotes from '../../assets/notes.json';

const createNoteContent = note => {

  const noteContent = document.createElement('div');
  noteContent.classList.add('note__content');

  const title = document.createElement('h2');
  title.classList.add('note__title');
  title.textContent = note.title;

  const body = document.createElement('p');
  body.textContent = note.body

  noteContent.append(title, body);

  return noteContent;
};

const createActionButton = (dataAction, iconType) => {
  const button = document.createElement('button');
  button.classList.add('action');
  button.dataset.action = dataAction;

  const buttonIcon = document.createElement('i');
  buttonIcon.classList.add('material-icons', 'action__icon');
  buttonIcon.textContent = iconType;

  button.append(buttonIcon);

  return button;
};

const createNoteFooter = note => {
  const footer = document.createElement('footer');
  footer.classList.add('note__footer');

  const prioritySection = document.createElement('section');
  prioritySection.classList.add('note__section');

  const prioritySpan = document.createElement('span');
  prioritySpan.classList.add('note__priority');
  prioritySpan.textContent = `Priority: ${note.priority}`;

  const editSection = document.createElement('section');
  editSection.classList.add('note__section');

  prioritySection.append(createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN),
  createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP), 
  prioritySpan);

  editSection.append(createActionButton(NOTE_ACTIONS.EDIT,ICON_TYPES.EDIT),
  createActionButton(NOTE_ACTIONS.DELETE,ICON_TYPES.DELETE));

  footer.append(prioritySection, editSection);

  return footer;
};

export const createListItem = note => {
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = `${note.id}`;

  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');

  noteDiv.append(createNoteContent(note), createNoteFooter(note));
  listItem.append(noteDiv);
  return listItem;
};

export const renderNoteList = (listRef, notes) => {
  const allNotes = notes.map(note => createListItem(note));
  listRef.append(...allNotes);
};

renderNoteList(refs.noteListRef, initialNotes);