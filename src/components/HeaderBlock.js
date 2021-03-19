import React, { Component } from 'react';
import constants from '../lib/constants.js';
import logo from './logo.svg';
import './HeaderBlock.css';

export default function HeaderBlock({headerText, changeActivity}) {
  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="col-12 header-top">
          <img src={logo} className="header-logo" alt="logo" onClick={() => {changeActivity(constants.activities.HOME);}}/>
          <h2>{headerText}</h2>
        </div>
      </div>
    </div>
  );
}
