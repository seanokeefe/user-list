import React from 'react';
import PropTypes from 'prop-types';

const ListFooter = ({ total, pages, limit, currentPage }) => (
  <div className="footer">
    <div>
      <div>Total: {total}</div>
      <div>Pages: {pages}</div>
      <div>Limit: {limit}</div>
      <div>Current: {currentPage}</div>
    </div>
  </div>
);

ListFooter.propTypes = {
  total: PropTypes.number,
  pages: PropTypes.number,
  limit: PropTypes.number,
  currentPage: PropTypes.number,
};

export default ListFooter;
