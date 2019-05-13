import React from 'react';
import { categories } from '../helpers/data';

class Categories extends React.Component {
  setCategory = e => {
    this.props.updateCategory(e.target.value);
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

export default Categories;
