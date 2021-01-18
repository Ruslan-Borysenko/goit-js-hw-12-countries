import { searchInput, span } from '../js/static-markup';
import fetchCountries from '../js/fetchCountries';
import {
  clearMarkup,
  createCountriesList,
  createCountryList,
} from '../js/dynamic-markup';
import { myError } from './notifications';
import { spinner, target } from './spinner';
let debounce = require('lodash.debounce');

// functions
const spinnerRun = () => {
  spinner.spin(target);
};

const spinnerStop = () => {
  setTimeout(() => {
    spinner.stop();
  }, 500);
};

export const searchCountry = () => {
  let searchQuery = searchInput.value;
  clearMarkup();

  if (searchQuery.trim() === '') {
    return;
  }

  fetchCountries(searchQuery)
    .then(promise => {
      spinnerRun();
      if (promise.length > 10) {
        myError('Too many matches found. Please enter a more specific query!');
        spinnerStop();
        return;
      }
      if (promise.length > 1 && promise.length <= 10) {
        let country = promise.find(country => country.name === searchQuery);
        clearMarkup();
        if (country) {
          createCountryList(country);
          spinnerStop();
          return;
        } else {
          let countries = promise.map(country => country.name);
          console.log(countries);
          createCountriesList(countries);
          spinnerStop();
          return;
        }
      }
      if (promise.length === 1) {
        clearMarkup();
        let [country] = [...promise];
        createCountryList(country);
        spinnerStop();
        return;
      }
    })
    .catch(error => {
      myError('Nothing found. \n Repeat the request!');
      spinnerStop();
    });
};

//events
searchInput.addEventListener('input', debounce(searchCountry, 500));
searchInput.addEventListener('blur', clearMarkup);
span.addEventListener('click', clearMarkup);
