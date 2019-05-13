import { combineReducers } from 'redux';
import {
  SET_LOCATION,
  SET_CATEGORY,
  SET_LOADING,
  SET_ERROR,
  SET_RESTAURANTS
} from '../actions';

function location(state = '', action) {
  switch (action.type) {
    case SET_LOCATION:
      return action.location;
    default:
      return state;
  }
}

function category(state = '', action) {
  switch (action.type) {
    case SET_CATEGORY:
      return action.category;
    default:
      return state;
  }
}

function restaurants(
  state = {
    venues: [],
    loading: false,
    error: false },
  action ) {
  switch (action.type) {
    case SET_ERROR:
      return {
        venues: [],
        loading: false,
        error: action.error
      };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_RESTAURANTS:
      return {
        venues: action.restaurants,
        loading: false,
        error: false };
    default:
      return state;
  }
}

export default combineReducers({
  location,
  category,
  restaurants
});
