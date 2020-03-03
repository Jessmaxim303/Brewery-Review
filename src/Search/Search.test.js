import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shallow } from 'enzyme';
import { getNews } from '../actions';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './Search.js';
import PropTypes from 'prop-types';


describe('Search', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(< SearchForm />)
  })
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('mapStateToProps', () => {
    it('should return an object with the movies and ratings array and a loading status', () => {
      const mockState = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        
      }
      const expected = {
        movies: [{title: 'Parasite', rating: 9}, {title: '1917', rating: 8}],
        
      }
      const mappedProps = mapStateToProps(mockState)
      expect(mappedProps).toEqual(expected)
    })
  })

})
