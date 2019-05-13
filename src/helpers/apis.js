import { CLIENT_ID, CLIENT_SECRET } from './credentials';
import { categories } from './data';

const sortName = (a, b) => {
  // remove case senstivity
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // if names are equal
  return 0;
};

// url and params
const BAD_URL = 'https://api.badurl.com';
const GOOD_URL = 'https://api.foursquare.com/v2/venues/search';
const VERS = '20190509';

export const getFSLocations = (location, categoryIndex) => {
  // set Chinese Restaurant to bad url for testing
  const fSURL = categoryIndex === '1' ? BAD_URL : GOOD_URL;
  const category = categories[categoryIndex].id;

  //  From Foursquare Developers: https://developer.foursquare.com/docs/api/venues/search
  const requestURL = `${fSURL}?near=${location}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERS}&categoryId=${category}&limit=20`;

  return fetch(requestURL)
    .then(response => {
      if (!response.ok) {
        throw response;
      } else return response.json();
    })
    .then(data => {
      // sort before returning
      return data.response.venues.sort(sortName);
    });
};
