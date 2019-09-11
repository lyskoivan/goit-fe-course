import productTemplates from '../../templates/product.hbs';
import  initialNotes from '../../assets/notes.json';
import {refs} from './constants.js';

export const createProductCard = product => productTemplates(product);
export const createProductListMarkup = products => products.map(product => createProductCard(product)).join('');

const markup = createProductListMarkup(initialNotes);
refs.noteListRef.insertAdjacentHTML('beforeend', markup);