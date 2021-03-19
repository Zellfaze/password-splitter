import React, { Component } from 'react';
import constants from '../lib/constants.js';
import logo from './logo.svg';
import './HeaderBlock.css';

class HeaderBlock extends Component {
  constructor(props) {
    super(props);
    
    this.goHome = this.goHome.bind(this);
  }
  
  goHome() {
    this.props.changeActivity(constants.activities.HOME);
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row header">
          <div className="col-12 header-top">
            <img src={logo} className="header-logo" alt="logo" onClick={this.goHome}/>
            <h2>{this.props.headerText}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBlock;
