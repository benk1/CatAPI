import React from 'react';
const SearchBar = ({ handleChange, searchText }) => {
  return (
    <>
      <div className="row input">
        <div className="input-field col s6">
          <i className="material-icons prefix">search</i>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search"
            value={searchText}
          />
          <label htmlFor="icon_prefix2">Search By Name </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
