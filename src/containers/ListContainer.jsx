import React, { Component } from 'react';

import List from '../components/List';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      recordsObj: {},
      restURL: 'https://appthis-code-challenge-api.herokuapp.com/people',
      orderKey: 'name',
      orderDirection: 'asc',
      recordsPerPage: '25',
      currentPage: '1',
      errorMsg: '',
    };

    this.handleSortChange = this.handleSortChange.bind(this);
    this.handleDirChange = this.handleDirChange.bind(this);
    this.getRecords = this.getRecords.bind(this);
  }

  componentDidMount() {
    this.getRecords();
  }


  // getRecords() produces a side-effect of setting recordsObj state
  getRecords(orderKey = this.state.orderKey,
    orderDirection = this.state.orderDirection,
    recordsPerPage = this.state.recordsPerPage,
    currentPage = this.state.currentPage,
  ) {
    fetch(`${this.state.restURL}?orderBy.key=${orderKey}&orderBy.dir=${orderDirection}&page.limit=${recordsPerPage}&page.current=${currentPage}`)
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

  handleSortChange(event) {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    this.getRecords(event.currentTarget.value);
  }

  handleDirChange(event) {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
    this.getRecords(this.state.orderKey, event.currentTarget.value);
  }

  render() {
    const { page, records, orderBy } = this.state.recordsObj;

    return (
      <List
        page={page}
        records={records}
        orderBy={orderBy}
        handleSortChange={this.handleSortChange}
        handleDirChange={this.handleDirChange}
      />
    );
  }
}

export default ListContainer;
