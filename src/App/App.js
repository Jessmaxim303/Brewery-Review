import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getNews } from '../actions';
import { connect } from 'react-redux';
import { Header } from '../Header/Header.js';
import StateContainer from '../StateContainer/StateContainer.js';
import MainNewsArea from '../MainNewsArea/MainNewsArea.js';
import BackArticle from '../BackArticle/BackArticle.js';
import { Link } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Switch>
              <Route exact path='/' render={() => <MainNewsArea />} />
              <Route exact path='/state' render={() => <StateContainer />} />
              <Route exact path='/company' render={() => <BackArticle />} />
            </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
