import productTemplates from '../../templates/product.hbs';
import  {getFetchNotes} from '../../services/api.js';
import {refs} from './constants.js';

export const createProductCard = product => productTemplates(product);
export const createProductListMarkup = products => {
    refs.noteListRef.innerHTML = '';
    const items = products.map(product => createProductCard(product)).join('');
    refs.noteListRef.insertAdjacentHTML('beforeend', items);
};
console.log(getFetchNotes());

getFetchNotes().then((notes) => {
    createProductListMarkup(notes);
});
