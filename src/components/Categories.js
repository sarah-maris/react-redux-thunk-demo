import React from 'react';
import { connect } from 'react-redux';
import { handleSetCategory } from '../actions';
import { categories } from '../helpers/data';

class Categories extends React.Component {
  setCategory = e => {
    this.props.dispatch(handleSetCategory(e.target.value));
  };

  render() {
    return (
      <div className="dropdown">
        <h3>Restaurant Type</h3>
        <select onChange={this.setCategory} defaultValue={'none'}>
          <option value="none" disabled>
            Choose...
          </option>
          {categories.map((category, index) => {
            return (
              <option key={category.id} value={index}>
                {category.shortName}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}

export default connect(state => ({
  location: state.category
}))(Categories);
