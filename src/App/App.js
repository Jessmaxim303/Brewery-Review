import React, { Component } from 'react';
import './App.css';

import { Header } from '../Header/Header.js';
import { SideNavigation } from '../SideNavigation/SideNavigation.js';
import { MainNewsArea } from '../MainNewsArea/MainNewsArea.js';
import { fetchNewsApi } from '../apiCalls/apiCalls.js';

export class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    Promise.all([this.loadMovies()])
  }

  loadMovies() {
      fetchNewsApi()
      .then(data => console.log(data))
    }

  render() {
  return (
    <div className="App">
      <Header />
      <div className="main_body-area">
        <SideNavigation />
        <MainNewsArea />
      </div>
    </div>
  );
}
}

export default App;

