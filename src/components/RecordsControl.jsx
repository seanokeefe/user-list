import React from 'react';
import PropTypes from 'prop-types';

const RecordsControl = ({ limit, total, handleLimitChange }) => (
  <div className="records-control">
    <select
      className="limit-select"
      name="recordsPerPage"
      value={limit}
      onChange={handleLimitChange}
    >
      <option value="5" >5</option>
      <option value="10" >10</option>
      <option value="25" >20</option>
      <option value="50" >50</option>
    </select>
    <div>
      {`records per page of ${total} total`}
    </div>
  </div>
);

RecordsControl.propTypes = {
  limit: PropTypes.number,
  total: PropTypes.number,
  handleLimitChange: PropTypes.func,
};

export default RecordsControl;
