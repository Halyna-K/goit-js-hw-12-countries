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
        if (data.length > 10) {
            error ({
                text: 'Too many matches found. Please enter a more specific query!'
              })
         }
        else
        if ( data.length <= 10 && data.length > 1 ) {
        renderCountryList(data)
        }
        else
        if (data.length === 1) {
        renderCountryCard(data)}
    })
    .catch (err=> {
        alert ({ text: "You must enter query parameters!"})}

    )
}
