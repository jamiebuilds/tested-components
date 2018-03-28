// @flow
'use strict';
const test = require('ava');
const { createElement: h} = require('react');
const { render } = require('react-dom');
const styled = require('styled-components').default;
const { find, findAll } = require('./');

const Button = styled.button`
  background: blue;
`;

let root;

test.beforeEach(() => {
  root = document.createElement('root');
  (document.body /*: any */).appendChild(root);
});

test.afterEach(() => {
  root.remove();
});

test('find()', t => {
  render(
    h('div', null, h(Button, null, 'hi there')),
    root
  );

  let button = find(root, Button);
  t.is((button /*: any */).textContent, 'hi there');
});

test('findAll()', t => {
  render(
    h('div', null,
      h(Button, null, 'one'),
      h(Button, null, 'two')
    ),
    root
  );

  let button = findAll(root, Button);
  t.is(button[0].textContent, 'one');
  t.is(button[1].textContent, 'two');
});
