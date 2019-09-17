export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена 🎉',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора',
};

export const refs = {
  noteListRef : document.querySelector('.note-list'),
  form : document.querySelector('.note-editor'),
  formTextarea : document.querySelector('textarea.note-editor__input'),
  formInput : document.querySelector('input.note-editor__input'),
  filterInput : document.querySelector('.search-form__input'),
  modalButton : document.querySelector('button[data-action="open-editor"]'),
};