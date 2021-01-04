import { refs } from './refs';
import countryTpl from '../templates/country.hbs';
import countriesTpl from '../templates/countries.hbs';

export function makeMarkupCountry(countryInfo) {
  const markup = countryTpl(countryInfo);
  refs.ul.insertAdjacentHTML('beforeend', markup);
}

export function makeMarkupCountries(countries) {
  const markup = countriesTpl(countries);
  refs.ul.insertAdjacentHTML('beforeend', markup);
}

export function clearMarkup() {
  refs.input.value = '';
  refs.ul.textContent = '';
}

export function ulClear() {
  refs.ul.textContent = '';
}
