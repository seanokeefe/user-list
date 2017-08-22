import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';

import ListHeader from './ListHeader';
import ListFooter from './ListFooter';

const List = ({ page, records, orderBy }) => (
  <div id="list">
    <ListHeader sortedBy={orderBy && orderBy.key} dir={orderBy && orderBy.dir} />
    <div className="main">
      {records && records.map(({ name }) => (
        <div key={cuid()}>{ name }</div>
      ))}
    </div>
    <ListFooter
      total={page && page.total}
      pages={page && page.pages}
      limit={page && page.limit}
      currentPage={page && page.current}
    />
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
