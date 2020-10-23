import React from 'react';
const CatSearch = ({ handleChange, searchText }) => {
	return (
		<>
			<div className='row input'>
				<div className='input-field col s6'>
					<i className='material-icons prefix'>search</i>
					<input
						onChange={handleChange}
						type='text'
						placeholder='Search'
						value={searchText}
					/>
					<label htmlFor='icon_prefix2'>Search By Cat </label>
				</div>
			</div>
		</>
	);
};

export default CatSearch;
