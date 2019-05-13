// import API code
import { getFSLocations } from '../helpers/apis';

// export constants
export const SET_LOCATION = 'SET_LOCATION';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

// creators
function setLocation(location) {
  return {
    type: SET_LOCATION,
    location
  };
}

function setCategory(category) {
  return {
    type: SET_CATEGORY,
    category
  };
}

function setLoading(loading) {
  return {
    type: SET_LOADING,
    loading
  };
}

function setError(error) {
  return {
    type: SET_ERROR,
    error
  };
}

function setRestaurants(restaurants) {
  return {
    type: SET_RESTAURANTS,
    restaurants
  };
}

// async creators
export function handleSetCategory(category) {
  return (dispatch, getState) => {
    // empty Restaurants state
    dispatch(setRestaurants([]));
    // set category
    dispatch(setCategory(category));

    // if location has been set, run API request
    const location = getState().location;
    if (location) {
      dispatch(setLoading(true));
      return getFSLocations(location, category)
        .then(restaurants => {
          dispatch(setRestaurants(restaurants));
        })
        .catch(() => {
          dispatch(setError(true));
        });
    }
  };
}

export function handleSetLocation(location) {
  return (dispatch, getState) => {
    // empty Restaurants state
    dispatch(setRestaurants([]));
    // set location
    dispatch(setLocation(location));

    // if category has been set, run API request
    const category = getState().category;
    if (category) {
      dispatch(setLoading(true));
      return getFSLocations(location, category)
        .then(restaurants => {
          dispatch(setRestaurants(restaurants));
        })
        .catch(() => {
          dispatch(setError(true));
        });
    }
  };
}
