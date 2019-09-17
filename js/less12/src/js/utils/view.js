import productTemplates from '../../templates/product.hbs';
import  servNotes from '../../assets/notes.json';
import {refs} from './constants.js';

export const createProductCard = product => productTemplates(product);
export const createProductListMarkup = products => products.map(product => createProductCard(product)).join('');
export const getStorageNotes = () => {
    const storageNotes = localStorage.getItem('items');
    const parseNotes = JSON.parse(storageNotes);
    if (parseNotes !== null) return parseNotes;
    return servNotes;
  };

const markup = createProductListMarkup(getStorageNotes());
refs.noteListRef.insertAdjacentHTML('beforeend', markup);