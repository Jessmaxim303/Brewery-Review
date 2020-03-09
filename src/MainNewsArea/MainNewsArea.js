import React, { Component } from 'react';
import './MainNewsArea.css';
import { connect } from 'react-redux';

import SearchForm from '../Search/Search.js';
import Welcome from '../Welcome/Welcome.js';

export const MainNewsArea = ({news}) => {
  return (
    <div className="main_body-area">
      < Welcome />
      < SearchForm />
    </div>
  )
}

export default MainNewsArea;