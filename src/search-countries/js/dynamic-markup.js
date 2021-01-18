import { searchInput, ul } from '../js/static-markup';
import refs from '../js/refs.js';
import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';

// let { body } = refs;

export const clearMarkup = () => {
  ul.textContent = '';
  searchInput.value = '';
};

export const createCountriesList = countriesInfo => {
  const markup = countriesTemplate(countriesInfo);
  ul.insertAdjacentHTML('beforeend', markup);
};

export const createCountryList = countryInfo => {
  const markup = countryTemplate(countryInfo);
  ul.insertAdjacentHTML('beforeend', markup);
};
