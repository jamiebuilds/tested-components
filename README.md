# tested-components

> Browser integration testing utils for styled-components

## Install

```sh
yarn add --dev tested-components
```

## Usage

**ConfirmPage.js**

```js
import React from 'react';
import styled from 'styled-components';

export const ConfirmForm = styled.form`...`;
export const ConfirmButton = styled.button`...`;

export default function ConfirmPage(props) {
  return (
    <ConfirmForm onSubmit={props.onSubmit}>
      <ConfirmButton type="submit">Confirm.</ConfirmButton>
    </ConfirmForm>
  );
}
```

**ConfirmPage.test.js**

```js
import React from 'react';
import { render } from 'react-dom';
import ConfirmPage, { ConfirmForm, ConfirmButton } from './ConfirmPage';
import { find, findAll } from 'tested-components';

let root = document.getElementById('root');
render(<ConfirmPage/>, root);

let form = find(root, ConfirmForm); // <form/>
let buttons = findAll(form, ConfirmButton);  // [<button type="submit"/>]
```
