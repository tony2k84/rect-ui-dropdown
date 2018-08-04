import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
export default class RectUIDropdown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      optimizedOptions: [
      {
        "key": 0,
        "value": props.value,
        "text": props.value
      }
    ]
    }
  }

  handleSearch = (_options, _query) => {
    const {options, maxsearch} = this.props;
    const re = new RegExp(_query, "i");
    return options.filter(opt => re.test(opt.text)).slice(0,maxsearch);
  }

  render() {
    let { optimizedOptions } = this.state;
    return (
      <Dropdown
        {...this.props}
        search={this.handleSearch}
        selection
        options={optimizedOptions} />
    )
  }
}
