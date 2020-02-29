import React, { Component } from 'react';
import './App.css';
import { getNews } from '../actions';
import { connect } from 'react-redux';
import { Header } from '../Header/Header.js';
import { SideNavigation } from '../SideNavigation/SideNavigation.js';
import MainNewsArea from '../MainNewsArea/MainNewsArea.js';
import { fetchStateNewsApi } from '../apiCalls/apiCalls.js';

export class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  componentDidMount() {
    Promise.all([this.loadAllMovies()])
  }

  loadAllMovies() {
    fetchStateNewsApi()
    .then(data => {
      this.props.getNews(data)
    })
    // .then(data => this.setState( data ))
  }

  render() {
  return (
    <div className="App">
      <Header />
      <div className="main_body-area">
        <MainNewsArea />
      </div>
    </div>
  )
}
}

export const mapStateToProps = state => ({
  title: state.title
})

export const mapDispatchToProps = dispatch => ({
  getNews: (today) => dispatch( getNews(today) )
})

export default connect(null, mapDispatchToProps)(App);
