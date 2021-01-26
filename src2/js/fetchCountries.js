import axios from 'axios';

axios.defaults.baseURL = `https://restcountries.eu/rest/v2`;
axios.defaults.headers.get['Accept'] = 'application/json';

export default searchQuery => {
  const url = `/name/${searchQuery}`;
  return axios
    .get(url)
    .then(result => result.data)
    .catch(error => console.warn(error));
};
