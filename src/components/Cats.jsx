import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Cat from './Cat'

class Cats extends Component {
  render() {
    const total = (
      <p className=" center green-text accent-4 para ">
        we are currently having {this.props.cats.length} Cats in our database
      </p>
    );
    const results = this.props.cats.length ? (
      this.props.cats.map(cat => {
        return (
          <div className="row center" key={cat.id}>
            <div className="col s12 m6">
              <div className=" card yellow darken-1">
                <div className="card-content white-text  ">
                  <Link to={'/' + cat.id}>
                    <span className="card-title blue-text lighten-5">
                      Name: {cat.name}
                    </span>
                  </Link>
                  
                    <span className="card-title origin black-text accent-4">
                      Origin: {cat.origin}
                    </span>
                    
                    <span className="card-title origin black-text accent-4">
                      Life Span: {cat.life_span} Years
                    </span>
                    <span className="card-title origin black-text accent-4">
                      Weight: {cat.weight.metric} Kg
                    </span>
                    
                    <p className="black-text accent-4">{cat.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <p>There are no cats available</p>
    );

    return (
      <div>
        {total}

        {results}
      </div>
    );
  }
}

export default Cats;
