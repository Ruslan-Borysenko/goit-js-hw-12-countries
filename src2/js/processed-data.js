import { searchInput, span } from '../js/static-markup';
import fetchCountries from '../js/fetchCountries';
import {
  clearMarkup,
  clearInput,
  createCountriesList,
  createCountryList,
} from '../js/dynamic-markup';
import { myError } from './notifications';
import spinner from './spinner';
import { searchBox } from './static-markup';
import debounce from 'lodash.debounce';

// functions
const spinnerRun = () => {
  spinner.spin(searchBox);
};

const spinnerStop = () => {
  spinner.stop();
};

export const searchCountry = () => {
  const searchQuery = searchInput.value;

  if (!searchQuery.trim()) {
    return;
  }

  spinnerRun();
  fetchCountries(searchQuery)
    .then(promise => {
      if (promise.length > 10) {
        clearInput();
        myError('Too many matches found. Please enter a more specific query!');
        // spinnerStop();
        return;
      }
      if (promise.length > 1 && promise.length <= 10) {
        let country = promise.find(country => country.name === searchQuery);
        clearMarkup();
        if (country) {
          createCountryList(country);
          // spinnerStop();
          return;
        } else {
          let countries = promise.map(country => country.name);
          console.log(countries);
          createCountriesList(countries);
          // spinnerStop();
          return;
        }
      }
      if (promise.length === 1) {
        clearMarkup();
        clearInput();
        let [country] = [...promise];
        createCountryList(country);
        // spinnerStop();
        return;
      }
    })
    .catch(error => {
      myError('Nothing found. \n Repeat the request!');
      // spinnerStop();
    })
    .finally(() => spinnerStop());
};

//events
searchInput.addEventListener('input', debounce(searchCountry, 500));
searchInput.addEventListener('blur', clearInput);
span.addEventListener('click', clearMarkup);
