import productTemplates from '../../templates/product.hbs';
import {refs} from './constants.js';

export const createProductCard = product => productTemplates(product);
export const createProductListMarkup = products => {
    refs.noteListRef.innerHTML = '';
    const items = products.map(product => createProductCard(product)).join('');
    refs.noteListRef.insertAdjacentHTML('beforeend', items);
};
