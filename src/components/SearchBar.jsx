import React from 'react';
const SearchBar = ({handleChange,handleChange1,cats,handleSubmit}) => {
      
  return(

    <div className=" trial row">
    <form onSubmit={handleSubmit} className="col s12">

      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input onChange={handleChange} type="text" placeholder="Search By Name " value={cats.empty}/>
          <label htmlFor="icon_prefix2">Search By Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input onChange={handleChange1} type="text" placeholder="Search By Country" value={cats.empty}/>
          <label htmlFor="icon_prefix2">Search By Country</label>
        </div>
      </div>


      
    </form>
  </div>
  ) 
  
}
 
export default SearchBar;