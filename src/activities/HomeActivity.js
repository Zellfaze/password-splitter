import React, { Component } from 'react';
import constants from '../constants.js';

class HomeActivity extends Component {
  constructor(props) {
    super(props);
    
    this.onClickSave = this.onClickSave.bind(this);
    this.onClickLoad = this.onClickLoad.bind(this);
  }
  
  onClickSave() {
    this.props.changeActivity(constants.activities.SAVE);
  }
  
  onClickLoad() {
    this.props.changeActivity(constants.activities.LOAD);
  }
  
  render() {
    return (
      <div className="container-fluid mt-2">
        <div className="row justify-content-center">
          <AutoColButtonComponent type="primary" onClick={this.onClickSave} text="Save" />
          <AutoColButtonComponent type="secondary" onClick={this.onClickLoad} text="Load" />
        </div>
      </div>
    );
  }
}


class AutoColButtonComponent extends Component {
  render() {
    let buttonClass = `btn btn-${this.props.type} btn-lg`;
    return (
      <div className="col-md-auto">
        <button className={buttonClass} onClick={this.props.onClick}>{this.props.text}</button>
      </div>
    );
  }
}

export default HomeActivity;
 
