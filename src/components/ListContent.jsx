import React from 'react';
import PropTypes from 'prop-types';
import cuid from 'cuid';

import ListElement from './ListElement';

const ListContent = ({ records }) => (
  <div className="main">
    {records && records.map(({ name, email, avatar, address, balance, created }) => (
      <ListElement
        key={cuid()}
        name={name}
        email={email}
        avatar={avatar}
        address={address}
        balance={balance}
        created={created}
      />
    ))}
  </div>
);

ListContent.propTypes = {
  records: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
    address: PropTypes.shape({
      street: PropTypes.string,
      city: PropTypes.string,
      zip: PropTypes.sting,
      country: PropTypes.string,
    }),
    balance: PropTypes.number,
    created: PropTypes.string,
  })),
};

export default ListContent;
