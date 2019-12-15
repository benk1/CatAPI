import React, { Component } from 'react';
import axios from 'axios';
import Cats from './components/Cats';

import SearchBar from './components/NameSearch';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import CatParams from './components/CatParams';

const apiEndPoint = 'https://api.thecatapi.com/v1/breeds';

/*const searchingForName = (name) =>{
  console.log('cats name',name);
  return function(obj){
    console.log('my object',obj);
    return ((obj.name || obj.origin).toLowerCase().startsWith(name.toLowerCase() || !name)) 
  }
}

const searchingForCountry = (origin) =>{
  console.log('cats country',origin);
  return function(obj){
    console.log('my object',obj);
    return (obj.origin.toLowerCase().startsWith(origin.toLowerCase() || !origin)) 
  }
}*/

class App extends Component {
  state = {
    cats: [],
    searchText: ''
  };

  async componentDidMount() {
    const { data: cats } = await axios.get(apiEndPoint);
    //console.log(cats.slice(0,5));
    this.setState({
      cats: cats
    });
  }

  handleChange = e => {
    const key = e.target.value.toLowerCase();

    this.setState({
      searchText: key
    });
  };

  nameSearch = () => {
    const filteredCatsByName = this.state.cats.filter(cat =>
      cat.name.toLowerCase().startsWith(this.state.searchText)
    );
    this.setState({
      cats: filteredCatsByName
    });
  };

  render() {
    const { cats, searchText } = this.state;

    const filteredCatsByName = cats.filter(cat =>
      cat.name.toLowerCase().startsWith(searchText)
    );

    const filteredCatsByCountry = cats.filter(cat =>
      cat.origin.toLowerCase().startsWith(searchText)
    );

    return (
      <div className="container">
        <h2 className="center ">The Cat API</h2>

        <SearchBar handleChange={this.handleChange} searchText={searchText} />

        <Switch>
          <Route
            exact
            path="/"
            render={props => <Cats {...props} cats={filteredCatsByName} />}
          />
          <Route path="/:cat_id" component={CatParams} />
        </Switch>
      </div>
    );
  }
}

export default App;
