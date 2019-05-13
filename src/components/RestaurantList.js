import React from 'react';
import { categories } from '../helpers/data';
import loader from '../images/circles-loader.svg';

class RestaurantList extends React.Component {
  render() {
    const { restaurants, location, category, loading, error } = this.props;
    const categoryName = category ? categories[category].pluralName : '';

    return (
      <div className="list">
        {loading && (
          <img className="loader" src={loader} alt="loading indicator" />
        )}
        {error && (
          <div className="error">
            <p>
              There was an error with the Foursquare API. Please try again
              later.
            </p>
          </div>
        )}
        {restaurants.length > 0 && (
          <div className="list">
            <h3>{`Your Dining Options for ${categoryName} in ${location} `}</h3>
            <ul>
              {restaurants.map(restaurant => (
                <li key={restaurant.id}>
                  {restaurant.name} - {restaurant.location.address}
                </li>
              ))}
            </ul>
          </div>
        )}

        {restaurants.length === 0 && !error && !loading && (
          <p>Choose a city and restaurant type </p>
        )}
      </div>
    );
  }
}

export default RestaurantList;
