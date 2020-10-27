import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Cat from './Cat';

class Cats extends Component {
	render() {
		const { cats } = this.props;
		const total = (
			<p className=' container black-text accent-4 para '>
				we are currently having {cats.length} Cats in our database
			</p>
		);
		const results = cats.length ? (
			cats.map((cat) => {
				return <Cat key={cat.id} cat={cat} />;
			})
		) : (
			<p className='black-text accent-4'>There are no cats available</p>
		);

		return (
			<>
				{total}
				<div className=' mainDiv'>{results}</div>
			</>
		);
	}
}

export default Cats;
