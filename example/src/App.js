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
