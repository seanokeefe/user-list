import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';
import ListContainer from './containers/ListContainer';
import List from './components/List';
import ListContent from './components/ListContent';
import ListElement from './components/ListElement';
import ListFooter from './components/ListFooter';
import ListHeader from './components/ListHeader';
import SortSelect from './components/SortSelect';

// eslint-disable-next-line no-undef
test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

// eslint-disable-next-line no-undef
test('checks ListContainer default render', () => {
  const component = renderer.create(
    <ListContainer />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});

// eslint-disable-next-line no-undef
test('checks List default render', () => {
  const component = renderer.create(
    <List />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});

// eslint-disable-next-line no-undef
test('checks ListContent default render', () => {
  const component = renderer.create(
    <ListContent />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});

// eslint-disable-next-line no-undef
test('checks ListElement default render', () => {
  const component = renderer.create(
    <ListElement
      name={''}
      avatar={''}
      address={{ street: '', city: '', zip: '', country: '' }}
      balance={0}
      created={'2082-11-19T09:44:58.655Z'}
    />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});

// eslint-disable-next-line no-undef
test('checks ListFooter default render', () => {
  const component = renderer.create(
    <ListFooter />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});

// eslint-disable-next-line no-undef
test('checks ListHeader default render', () => {
  const component = renderer.create(
    <ListHeader />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});

// eslint-disable-next-line no-undef
test('checks SortSelect default render', () => {
  const component = renderer.create(
    <SortSelect />,
  );
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});
