'use strict';
class Notepad {
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
    const arrNotes = [];
    for (const note of this._notes) {
      const titleLower = note.title.toLowerCase();
      const bodyLower = note.body.toLowerCase();
      if (bodyLower.includes(queryToLower) || titleLower.includes(queryToLower)) {
        arrNotes.push(note);
      }
    }
    return arrNotes;
  }
  filterNotesByPriority(priority) {
    const arrNotes = [];
    for (const note of this._notes) {
      if (note.priority === priority) {
        arrNotes.push(note);
      }
    }
    return arrNotes;
  }
};

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);

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

const createListItem = note => {
  const listItem = document.createElement('li');
  listItem.classList.add('note-list__item');
  listItem.dataset.id = `${note.id}`;

  const noteDiv = document.createElement('div');
  noteDiv.classList.add('note');

  noteDiv.append(createNoteContent(note), createNoteFooter(note));
  listItem.append(noteDiv);
  return listItem;
};

const renderNoteList = (listRef, notes) => {
  const allNotes = notes.map(note => createListItem(note));
  listRef.append(...allNotes);
};

const refs = {
  noteListRef : document.querySelector('.note-list'),
  form : document.querySelector('.note-editor'),
  formTextarea : document.querySelector('textarea.note-editor__input'),
  formInput : document.querySelector('input.note-editor__input'),
  filterInput : document.querySelector('.search-form__input'),
};

renderNoteList(refs.noteListRef, initialNotes);

const generateUniqueId = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const generateNote = (title, body) => {
  const newNote = {
    id : generateUniqueId(),
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

refs.form.addEventListener('submit', handleCreateForm);

const removeListItem = (item) => {
  notepad.deleteNote(item.dataset.id);
  item.remove();
};

const handleRemoveNote = ({target}) => {
  if (target.tagName !== 'I' || target.textContent !== 'delete') return;
  removeListItem(target.closest('li'));
};

refs.noteListRef.addEventListener('click', handleRemoveNote);

const handleFilterList = ({target}) => {
  refs.noteListRef.innerHTML = '';
  renderNoteList(refs.noteListRef, notepad.filterNotesByQuery(target.value));
};

refs.filterInput.addEventListener('input', handleFilterList);