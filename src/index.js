import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";
export default class RectUIDropdown extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      optimizedOptions: []
    }
  }

  handleSearch = (_options, _query) => {
    const {options, maxsearch} = this.props;
    const re = new RegExp(_query, "i");
    return options.filter(opt => re.test(opt.text)).slice(0,maxsearch);
  }

  render() {
    const {value} = this.props;
    return (
      <Dropdown
        {...this.props}
        search={this.handleSearch}
        selection
        options={[{key: 0,value: value,text: value}]} />
    )
  }
}
