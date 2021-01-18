import refs from './refs.js';
const { body } = refs;

// create static elements for DOM
export const searchBox = document.createElement('div');
searchBox.classList.add('search-box');

export const span = document.createElement('span');

export const searchInput = document.createElement('input');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('id', 'search-input');
searchInput.setAttribute('placeholder', 'Input country name');
searchInput.setAttribute(
  'aria-label',
  'Search through restcountries.eu content',
);

export const ul = document.createElement('ul');
ul.classList.add('country-list');
ul.classList.add('list');

// create func which add static elements to DOM
export const createDOM = function () {
  body.insertAdjacentElement('afterbegin', searchBox);
  searchBox.insertAdjacentElement('beforeend', searchInput);
  searchBox.insertAdjacentElement('beforeend', span);
  body.insertAdjacentElement('beforeend', ul);
};
