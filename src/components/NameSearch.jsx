import React from 'react';
const SearchBar = ({ handleChange, searchText }) => {
  return (
    <>
      <div className="row input">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input
            onChange={handleChange}
            value={searchText}
            id="search"
            type="text"
            className="validate"
          />
          <label className="active" htmlFor="search">
            Search By Name
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
