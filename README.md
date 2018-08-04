# rect-ui-dropdown

> React UI Dropdown

[![NPM](https://img.shields.io/npm/v/rect-ui-dropdown.svg)](https://www.npmjs.com/package/rect-ui-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview
This is basic dropdown for react included with a searchable dropdown and a performance improved searchable dropdown. With React when we have a dropdown whcih multiple sub nodes for each options, it tends to slow the update of DOM. This component solves the problem by putting in the DOM only a limited set of searchable nodes.

## Install

```bash
npm install --save rect-ui-dropdown
```

## Usage

```jsx
import React, { Component } from 'react'

import RectUIDropdown from 'rect-ui-dropdown'

export default class App extends Component {
  onSelect = ({key, value}) => {
    console.log('selected values:', key, value);
  }
  render () {
    return (
      <div>
        <h5>Default Dropdown</h5>
        <RectUIDropdown
          prompt='Select Currency'
          values={[
            {key:'1', value: 'USD'},
            {key:'2', value: 'MYR'},
          ]}
          onSelect={this.onSelect}
        />

        <h5>Searchable Dropdown</h5>
        <RectUIDropdown
          prompt='Select Currency'
          values={[
            {key:'1', value: 'USD'},
            {key:'2', value: 'MYR'},
          ]}
          onSelect={this.onSelect}
        />

        <h5>Searchable Dropdown (Huge Data)</h5>
        <RectUIDropdown
          prompt='Select Currency'
          values={[
            {key:'1', value: 'USD'},
            {key:'2', value: 'MYR'},
          ]}
          onSelect={this.onSelect}
          maxSearch={10}
        />

      </div>

      
    )
  }
}

```

## License

MIT © [tony2k84](https://github.com/tony2k84)
