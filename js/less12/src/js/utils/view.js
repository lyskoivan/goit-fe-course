import productTemplates from '../../templates/product.hbs';
import  servNotes from '../../assets/notes.json';
import {refs} from './constants.js';

export const createProductCard = product => productTemplates(product);
export const createProductListMarkup = products=> {
    refs.noteListRef.innerHTML = '';
    const items = products.map(product => createProductCard(product)).join('');
    refs.noteListRef.insertAdjacentHTML('beforeend', items);
};
export const getStorageNotes = () => {
    const storageNotes = localStorage.getItem('items');
    const parseNotes = JSON.parse(storageNotes);
    if (parseNotes !== null) return parseNotes;
    return servNotes;
  };

createProductListMarkup(getStorageNotes());
