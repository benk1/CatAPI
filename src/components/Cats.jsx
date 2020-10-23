import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cat from './Cat';

class Cats extends Component {
	render() {
		const total = (
			<p className=' center green-text accent-4 para '>
				we are currently having {this.props.cats.length} Cats in our database
			</p>
		);
		const results = this.props.cats.length ? (
			this.props.cats.map((cat) => {
				return <Cat key={cat.id} cat={cat} {...cat} />;
			})
		) : (
			<p>There are no cats available</p>
		);

		return (
			<div>
				{total}
				<div className='mainDiv'>{results}</div>
			</div>
		);
	}
}

export default Cats;
