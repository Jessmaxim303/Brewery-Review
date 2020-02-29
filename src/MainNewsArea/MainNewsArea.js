import React, { Component } from 'react';
import './MainNewsArea.css';
import { connect } from 'react-redux';

import SearchForm from '../Search/Search.js';

export const MainNewsArea = ({news}) => {
  return (
    <div className="main_body-area">
      < SearchForm />
    </div>
  )
}

export default MainNewsArea;