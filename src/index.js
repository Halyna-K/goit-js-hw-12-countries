import './sass/main.scss';
import { alert, error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
// defaultModules.set(PNotifyMobile, {});
import {fetchCountries} from './js/fetchCountries.js';
import {renderCountryCard} from './js/cardRender.js';
import {renderCountryList} from './js/listRender.js';
import clearInfo from './js/clearInfo.js';
import getRefs from './js/refs.js';
const refs = getRefs();
var debounce = require('lodash.debounce');

refs.input.addEventListener('input',debounce(onSearch, 500))

export default function onSearch(e) {
    e.preventDefault();
     clearInfo();
    const searchQuery = e.target.value;

    fetchCountries(searchQuery)
    .then(data => {
        if (data.length ===1) {
         renderCountryCard(data)}
        else
        if ( data.length > 1 || data.length <= 10 ) {
         renderCountryList(data)
        }
        else
        if (data.length > 10) {
            alert({
                text: 'Too many matches found. Please enter a more specific query!'
              })
         }
    })
    .catch (err=> {
        error ({ text: "You must enter query parameters!"})}

    )
}
