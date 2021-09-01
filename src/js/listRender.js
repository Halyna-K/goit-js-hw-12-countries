import countryListTpl from '../templates/countriesList.hbs';
import getRefs from './refs.js';
const refs = getRefs();

export function renderCountryList (arr) {
    const markup = arr.map(el=> countryListTpl(el)).join('')
    refs.listInfo.insertAdjacentHTML('afterbegin', markup);
}
