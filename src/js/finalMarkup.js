import { createDOM } from './baseMarkup';
import { fetchCountries } from './fetchCountries';
import { refs } from './refs';
import {
  makeMarkupCountries,
  makeMarkupCountry,
  clearMarkup,
  ulClear,
} from './changeMarkup';
import './notifications.js';
import { info, error } from '@pnotify/core/dist/PNotify.js';

let debounce = require('lodash.debounce');

createDOM();

// events
refs.input.addEventListener('input', debounce(finalMarkup, 500));
refs.input.addEventListener('blur', clearMarkup);

export default function finalMarkup() {
  let searchQuery = refs.input.value;

  if (searchQuery === '' || searchQuery === ' ') {
    ulClear();
    return;
  }

  fetchCountries(searchQuery).then(promise => {
    if (promise.length > 10) {
      ulClear();
      return info(
        'Too many matches found. Please enter a more specific query!',
      );
    }
    if (promise.length > 1 && promise.length <= 10) {
      ulClear();
      let countries = { countries: promise.map(country => country.name) };
      makeMarkupCountries(countries);
    }
    if (promise.length === 1) {
      ulClear();
      let [country] = [...promise];
      console.log(country);
      makeMarkupCountry(country);
    }
    if (promise.status === 404) {
      clearMarkup();
      error('There is not such country. Try another one.');
    }
  });
}
