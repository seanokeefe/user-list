import React from 'react';
import PropTypes from 'prop-types';

import SortSelect from './SortSelect';

const ListHeader = ({ sortedBy, dir, handleSortChange }) => (
  <div className="header">
    <h1>User Records</h1>
    <SortSelect sortedBy={sortedBy} dir={dir} handleSortChange={handleSortChange} />
  </div>
);

ListHeader.propTypes = {
  sortedBy: PropTypes.string,
  dir: PropTypes.string,
  handleSortChange: PropTypes.func,
};

export default ListHeader;
