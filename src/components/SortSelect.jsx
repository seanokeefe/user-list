import React from 'react';
import PropTypes from 'prop-types';

const SortSelect = ({ sortedBy, dir, handleSortChange }) => (
  <div className="sort">
    <span>Sort By:</span>
    <select name="orderKey" value={sortedBy} onChange={handleSortChange}>
      <option value="name" >name</option>
      <option value="balance" > balance</option>
      <option value="city" >city</option>
      <option value="country" >country</option>
    </select>
    {`${dir}`}
  </div>

);

SortSelect.propTypes = {
  sortedBy: PropTypes.string,
  dir: PropTypes.string,
  handleSortChange: PropTypes.func,
};

export default SortSelect;
