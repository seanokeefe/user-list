import React from 'react';
import PropTypes from 'prop-types';

import PageControl from './PageControl';
import RecordsControl from './RecordsControl';

const ListFooter = ({ total, pages, limit, currentPage, handleLimitChange, handlePageChange }) => (
  <div className="footer">
    <PageControl
      limit={limit}
      currentPage={currentPage}
      pages={pages}
      handlePageChange={handlePageChange}
    />
    <RecordsControl limit={limit} total={total} handleLimitChange={handleLimitChange} />
  </div>
);

ListFooter.propTypes = {
  total: PropTypes.number,
  pages: PropTypes.number,
  limit: PropTypes.number,
  currentPage: PropTypes.number,
  handleLimitChange: PropTypes.func,
  handlePageChange: PropTypes.func,
};

export default ListFooter;
