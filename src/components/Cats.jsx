import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import Cat from './Cat';
import CatParams from './CatParams';
const searchImageUrl = 'https://api.thecatapi.com/v1/images/search?breed_id=';
const catsDataUrl = 'https://api.thecatapi.com/v1/breeds';
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
				return <Cat key={cat.id} cat={cat} id={cat.id} />;
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
