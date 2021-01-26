import './static-markup.js';
import refs from './refs.js';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import updateMarkupCountry from './update-markup-country';

const { searchInput, searchInputClose, ul } = refs;

//===============================//
import { Spinner } from 'spin.js';
const opts = {
  color: 'rgba(0, 0, 0, 0.5)',
};
const spinner = new Spinner(opts);
//===============================//

searchInput.addEventListener('input', debounce(findCountry, 500));
searchInput.addEventListener('blur', ({ target }) => (target.value = ''));
searchInputClose.addEventListener(
  'click',
  ({ target }) => (target.textContent = ' ') && (ul.textContent = ' '),
);

function findCountry({ target }) {
  ul.textContent = '';
  const country = target.value;
  if (!country) {
    return;
  }
  spinner.spin(ul);
  fetchCountries(country)
    .then(data => updateMarkupCountry(data, country))
    .finally(() => spinner.stop(ul));
}
