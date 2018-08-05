# rect-ui-dropdown

> React UI Dropdown

[![NPM](https://img.shields.io/npm/v/rect-ui-dropdown.svg)](https://www.npmjs.com/package/rect-ui-dropdown) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Overview
React with dropdown - semantic searchable features tend to be slow with huge datasets. The solution is to have a dropdown limit the number of options to display and still search through all of the records. 
Note: this doesn't bundle semantic hence please install them manually. 
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "semantic-ui-css": "^2.3.3",
    "semantic-ui-react": "^0.82.1",

## Install

```bash
npm install --save rect-ui-dropdown
```

## Usage

```jsx
import React, { Component } from 'react'
import RectUIDropdown from 'rect-ui-dropdown'
import currencies from './currencies.json';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedValue: '',
    }
  }
  onChange = (e, d) => {
    this.setState({selectedValue: d.value})
  }
  render() {
    const {selectedValue} = this.state;
    return (
      <div style={{ padding: 20 }}>
        <RectUIDropdown
          placeholder='Select Currency'
          options={currencies}
          onChange={this.onChange}
          value={selectedValue}
          maxsearch={10}
        />
      </div>
    )
  }
}


```

## License

MIT © [tony2k84](https://github.com/tony2k84)
