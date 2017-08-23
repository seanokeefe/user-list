import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const SortSelect = ({ sortedBy, dir, handleSortChange, handleDirChange }) => (
  <div className="sort">
    <span>Sort By:</span>
    <select name="orderKey" value={sortedBy} onChange={handleSortChange}>
      <option value="name" >name</option>
      <option value="balance" > balance</option>
      <option value="address.city" >city</option>
      <option value="address.country" >country</option>
    </select>
    <div>
      <button name="orderDirection" value="asc" onClick={handleDirChange}><FontAwesome className={`sort-icons${dir === 'asc' ? '--active' : ''}`} name="caret-up" /></button>
      <button name="orderDirection" value="desc" onClick={handleDirChange}><FontAwesome className={`sort-icons${dir === 'desc' ? '--active' : ''}`} name="caret-down" /></button>
    </div>
  </div>

);

SortSelect.propTypes = {
  sortedBy: PropTypes.string,
  dir: PropTypes.string,
  handleSortChange: PropTypes.func,
  handleDirChange: PropTypes.func,
};

export default SortSelect;
