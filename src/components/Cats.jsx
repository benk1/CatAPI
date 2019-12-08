import React, { Component } from 'react';
//import Cat from './Cat'

class Cats extends Component {
  render(){
    const total = <p className="center blue-text darken-7">we are currently having {this.props.cats.length} Cats in our database</p>
    const results = this.props.cats.length ? (
      this.props.cats.map(cat =>{

        return(
          <div className=" card orange darken-4" key={cat.id}>
            <div className="card-content white-text  ">

            <span className="card-title">
            Name: {cat.name}
            </span>
            <span className="card-title">Origin: {cat.origin}</span>
            <p className="">{cat.description}</p>
            </div>
          </div>
        )
      })
    ): (
     
      
      <p>There are no cats available</p>
    )

    return ( 
      <div>
        {total}
      
      {results}
      </div>
     );
  }
  
} 

 
export default Cats;



 
