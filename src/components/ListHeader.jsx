import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

import SortSelect from './SortSelect';

const ListHeader = ({ sortedBy, dir, handleSortChange, handleDirChange }) => (
  <div className="header">
    <h1>User Records
      <FontAwesome name="folder-open-o" />
    </h1>
    <SortSelect
      sortedBy={sortedBy}
      dir={dir}
      handleSortChange={handleSortChange}
      handleDirChange={handleDirChange}
    />
  </div>
);

ListHeader.propTypes = {
  sortedBy: PropTypes.string,
  dir: PropTypes.string,
  handleSortChange: PropTypes.func,
  handleDirChange: PropTypes.func,
};

export default ListHeader;
