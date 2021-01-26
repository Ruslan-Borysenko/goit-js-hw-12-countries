import countriesTemplate from '../templates/countries.hbs';
import countryTemplate from '../templates/country.hbs';
import refs from '../js/refs';
import { information, mistake } from './notifications';

const { searchInput, ul } = refs;

function updateMarkupCountry(dataObj, searchQuery) {
  const { status, length } = dataObj;
  if (status === 404) {
    inputClear();
    mistake('Nothing found. \n Repeat the request!');
    return;
  }
  if (length === 1) {
    inputClear();
    ulClear();
    createCountryList(...dataObj); // чому мені доводиться розпиляти?
    return;
  }
  if (
    length > 1 &&
    dataObj.some(elem => elem.name.toLowerCase() == searchQuery.toLowerCase())
  ) {
    let country = dataObj.find(
      country => country.name.toLowerCase() == searchQuery.toLowerCase(),
    );
    createCountryList(country);
    return;
  }
  if (length > 1 && length <= 10) {
    ulClear();
    let countries = dataObj.map(country => country.name);
    createCountriesList(countries);
    return;
  }
  if (length > 10) {
    inputClear();
    information('Too many matches found. Please enter a more specific query!');
    return;
  }
}

function ulClear() {
  ul.textContent = '';
}

function inputClear() {
  searchInput.value = '';
}

function createCountriesList(countriesInfo) {
  const markup = countriesTemplate(countriesInfo);
  ul.insertAdjacentHTML('beforeend', markup);
}

function createCountryList(countryInfo) {
  const markup = countryTemplate(countryInfo);
  ul.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkupCountry;
