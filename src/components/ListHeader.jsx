import React from 'react';
import PropTypes from 'prop-types';

const ListHeader = ({ sortedBy, dir }) => (
  <div className="header">
    <h1>User Records</h1>
    <div className="sort">
      <span>Sort By:</span> {`${sortedBy} ${dir}`}
    </div>
  </div>
);

ListHeader.propTypes = {
  sortedBy: PropTypes.string,
  dir: PropTypes.string,
};

export default ListHeader;
