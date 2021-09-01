  const BASE_URL = `https://restcountries.eu/rest/v2/name`;

  export function fetchCountries(name) {
     return fetch(`${BASE_URL}/${name}`)
     .then (response => response.json())

   }
