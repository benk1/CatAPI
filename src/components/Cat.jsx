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
         <img src={cat.cfa_url} alt="country_flag"/>

         <span className="card-title">Country: {cat.origin}</span>
         <span className="card-title">Life Span: {cat.life_span}</span>
         <span className="card-title">Weight: {cat.weight.metric}</span>
         <p>{cat.description}</p>
       </div>
     </div>
   </div>
   </>
   );
}
 
export default Cat;