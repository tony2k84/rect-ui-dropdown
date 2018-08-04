import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

export default class ExampleComponent extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      open: false,
    }
    this.myRef = React.createRef();
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  toggle = () => {
    const {open} = this.state;
    if (!open) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }
    this.setState({open: !open});
  }
  handleOutsideClick(e) {
    if (this.myRef.current.contains(e.target)) {
      return;
    }
    this.toggle();    
  }
  select = (option) => {
    this.setState({selectedOption: option}, ()=> {
      this.toggle(); 
      this.props.onSelect(option)
    });
  }
  renderOptions = () => {
    const { values } = this.props;
    const { selectedOption } = this.state;
    return values.map((item) =>
      <li key={item.key}
        className={(selectedOption && selectedOption.key===item.key)?styles.selectedli:styles.defaultli} 
        onClick={()=>this.select(item)}>
          {item.value}
      </li>
    )
  }

  render() {
    const {prompt} = this.props;
    const {open, selectedOption} = this.state;

    return (
      <div className={styles.wrapper} ref={this.myRef}>
        <div className={styles.select} onClick={this.toggle}>
          {
            selectedOption?<span>{selectedOption.value}</span>:<span className={styles.prompt}>{prompt}</span>
          }
          <span className={styles.dropDownIcon}>&#9660;</span>
        </div>
        <div className={open?styles.contentOpen:styles.contentClosed} onBlur={()=>console.log('out')}>
          <ul>
          {
            this.renderOptions()
          }
          </ul>
        </div>
      </div>
    )
  }
}
