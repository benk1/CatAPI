import React, { Component } from 'react';
import axios from 'axios';
import Cat from './Cat';
class CatParams extends Component {
  state = {
    cat: null
  };

  componentDidMount() {
    //console.log(this.props);
    let id = this.props.match.params.cat_id;
    axios.get('https://api.thecatapi.com/v1/breeds/' + id).then(res => {
      this.setState({
        cat: res.data
      });
      console.log(res);
    });
  }
  render() {
    const { cat } = this.state;
    const catResults = cat ? (
      <div className="post">
        <h5 className="black-text  accent-4">Name: {cat.name}</h5>
        <h5 className="card-title black-text  accent-4">Origin: {cat.origin}</h5>
        <h5 className="card-title">Temperament: {cat.temperament}</h5>
        <h5 className="card-title">Weight: {cat.weight.metric} Kg</h5>
        <h5 className="card-title">Intelligence: {cat.intelligence}</h5>
        <p className="black-text  accent-4">Description: {cat.description}</p>
      </div>
    ) : (
      <div className="center">Loading Cat...</div>
    );
    return (
      <div className="container">
        <h4>{catResults}</h4>
      </div>
    );
  }
}

export default CatParams;
