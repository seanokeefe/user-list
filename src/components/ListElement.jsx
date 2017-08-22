import React from 'react';
import PropTypes from 'prop-types';

const ListElement = ({ name, avatar, address, balance, created }) => {
  const { street, city, zip, country } = address;

  return (
    <div className="list-item">
      <img className="list-item__avatar" src={avatar} alt={`avatar of ${name}`} />
      <div className="list-item__lockup">
        <div className="list-item__name">
          {name}
        </div>
        <div className="list-item__address">
          {street} <br />
          {`${city}, ${country} ${zip}`} <br />
        </div>
      </div>
      <div className="list-item__balance">
        <h4>Balance: <span>{balance}</span></h4>
      </div>
      <div className="list-item__created">
        record created: {created}
      </div>
    </div>
  );
};

ListElement.propTypes = {
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
};

export default ListElement;
