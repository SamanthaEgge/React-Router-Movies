import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <Router>
        <SavedList list={this.state.savedList} />
        <Route exact path='/' render={props => <MovieList {...props} />} />
        <Route path='/movies/:movieID' render={props => <Movie {...props} />} />
      </Router>
    );
  }
}
