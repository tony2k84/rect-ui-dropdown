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
        <h5>Current Dropdown (try searching for U**)</h5>
        <RectUIDropdown
          placeholder='Select Currency'
          options={currencies}
          onChange={this.onChange}
          value={selectedValue}
          maxsearch={5}
        />
      </div>
    )
  }
}
