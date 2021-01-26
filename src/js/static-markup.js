import refs from './refs';
const { body, ul } = refs;

function createDOM() {
  ul.classList.add('country-list');
  ul.classList.add('list');
  body.insertAdjacentElement('beforeend', ul);
}

export default createDOM();
