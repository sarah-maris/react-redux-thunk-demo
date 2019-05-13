import React from 'react';
import Locations from './Locations';
import Categories from './Categories';
import RestaurantList from './RestaurantList';
import { getFSLocations } from '../helpers/apis';
import '../css/app.css';

class App extends React.Component {
  state = {
    restaurants: [],
    loading: false,
    error: false,
    location: '',
    category: ''
  };

  updateCategory = category => {
    this.setState({ category });
    if (this.state.location) {
      this.setState({ error: false, loading: true, restaurants: [] });
      getFSLocations(this.state.location, category)
        .then(restaurants => {
          this.setState({ restaurants, loading: false });
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    }
  };

  updateLocation = location => {
    this.setState({ location });
    if (this.state.category) {
      this.setState({ error: false, loading: true, restaurants: [] });
      getFSLocations(location, this.state.category)
        .then(restaurants => {
          this.setState({ restaurants, loading: false });
        })
        .catch(() => {
          this.setState({ error: true, loading: false });
        });
    }
  };

  render() {
    const { restaurants, location, category, loading, error } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>React, Redux and Thunk Demo</h1>
        </header>
        <div className="container">
          <Locations updateLocation={this.updateLocation} />
          <Categories updateCategory={this.updateCategory} />
        </div>
        <div className="container">
          <RestaurantList
            restaurants={restaurants}
            location={location}
            category={category}
            loading={loading}
            error={error}
          />
        </div>
      </div>
    );
  }
}

export default App;
