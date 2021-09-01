import countryCardTpl from '../templates/countryCard.hbs';
import getRefs from './refs.js';
const refs = getRefs();

export function renderCountryCard (arr) {
     const markup = arr.map(el=> countryCardTpl(el)).join('')
    refs.listInfo.insertAdjacentHTML('afterbegin', markup);
 }
