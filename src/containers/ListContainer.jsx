import React, { Component } from 'react';

import List from '../components/List';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      recordsObj: {},
      restURL: 'https://appthis-code-challenge-api.herokuapp.com/people?orderBy.key=name&orderBy.dir=asc&page.limit=25',
      errorMsg: '',
    };
  }

  componentDidMount() {
    this.getRecords();
  }

  // getRecords() produces a side-effect of setting recordsObj state
  getRecords() {
    fetch(this.state.restURL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response error.');
      })
      .then((json) => {
        this.setState({
          recordsObj: json,
        });
      })
      .catch((error) => {
        this.setState({ errorMsg: `There was a problem loading data ${error.message}` });
      });
  }

  render() {
    const { page, records, orderBy } = this.state.recordsObj;

    return (
      <List page={page} records={records} orderBy={orderBy} />
    );
  }
}

export default ListContainer;
