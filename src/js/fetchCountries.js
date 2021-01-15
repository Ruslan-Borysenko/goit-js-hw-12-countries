import axios from 'axios';

axios.defaults.baseURL = `https://restcountries.eu/rest/v2`;
axios.defaults.headers.get['Accept'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export function fetchCountries(searchQuery) {
  const url = `/name/${searchQuery}`;
  return axios
    .get(url)
    .then(result => result.data)
    .catch(error => console.warn(error));
}
