import React from 'react';
const Cat = (props) => {
  const {cat} = props
  //console.log('my cat',cat.name);
  return ( 
    <>
   <div className="row">
     <div className="col s12 m6">
       <div className="card-content white-text">
         <span className="card-title">Name: {cat.name}</span>
         <span className="card-title">Country: {cat.origin}</span>
         <p>{cat.description}</p>
       </div>
     </div>
   </div>
   </>
   );
}
 
export default Cat;