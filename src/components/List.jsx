import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';

const List = ({ page, records, orderBy }) => (
  <div>
    {page &&
      <div>
        <div>Total: {page.total}</div>
        <div>Pages: {page.pages}</div>
        <div>Limit: {page.limit}</div>
        <div>Current: {page.current}</div>
      </div>
    }

    {orderBy && orderBy.key && (
      <div>{`Order by ${orderBy.key}, ${orderBy.dir}`}</div>
    )}

    {records && records.map(({ name }) => (
      <div key={cuid()}>{ name }</div>
    ))}
  </div>

);

List.propTypes = {
  page: PropTypes.shape({
    total: PropTypes.number,
    pages: PropTypes.number,
    limit: PropTypes.number,
    current: PropTypes.number,
    previous: PropTypes.number,
    next: PropTypes.number,
    showing: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    }),
  }),
  records: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zip: PropTypes.sting,
      country: PropTypes.string,
    }),
  })),
  orderBy: PropTypes.shape({
    key: PropTypes.string,
    dir: PropTypes.string,
  }),
};

export default List;
