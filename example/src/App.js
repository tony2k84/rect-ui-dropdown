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
    console.log(d.value);
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
