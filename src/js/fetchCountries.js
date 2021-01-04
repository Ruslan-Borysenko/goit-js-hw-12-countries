export function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}
