import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AnimeCardList from './components/AnimeCardList'
import AnimeCardDetails from './components/AnimeCardDetails'
class App extends Component {

	render() {
		
		return  (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AnimeCardList} /> 
        <Route exact path="/anime/:animeId" component={AnimeCardDetails} />     
      </Switch>
    </BrowserRouter>
		);
    }
}

export default App;
