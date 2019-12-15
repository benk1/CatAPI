import React from 'react';
const SearchBar = ({ handleChange, searchText }) => {
  return (
    <>
      <div class="row input">
        <div class="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input
            onChange={handleChange}
            value={searchText}
            id="search"
            type="text"
            class="validate"
          />
          <label class="active" htmlFor="search">
            Search By Name
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
