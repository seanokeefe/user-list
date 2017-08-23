import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import cuid from 'cuid';

const PageControl = ({ currentPage, pages, handlePageChange }) => {
  // creates an empty array the size of the number pages to iterate over
  const pageArray = [...Array(pages)];

  return (
    <div className="pagination">
      <button
        name="currentPage"
        value={currentPage - 1}
        onClick={handlePageChange}
        disabled={currentPage === 1}
      >
        <FontAwesome className="pager-icons" name="caret-left" />
      </button>
      <select
        className="page-select"
        name="currentPage"
        value={currentPage}
        onChange={handlePageChange}
      >
        {
          pages &&
          pageArray.map((page, idx) => <option key={cuid()} value={idx + 1} >{idx + 1}</option>)
        }
      </select>
      <button
        name="currentPage"
        value={currentPage + 1}
        onClick={handlePageChange}
        disabled={currentPage === pages}
      >
        <FontAwesome className="pager-icons" name="caret-right" />
      </button>
    </div>
  );
};

PageControl.propTypes = {
  currentPage: PropTypes.number,
  pages: PropTypes.number,
  handlePageChange: PropTypes.func,
};

export default PageControl;
