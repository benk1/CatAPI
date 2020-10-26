import React, { Component } from 'react';
import axios from 'axios';
//import Cat from './Cat';
class CatParams extends Component {
	state = {
		cat: null,
	};

	componentDidMount() {
		let id = this.props.match.params.cat_id;
		axios.get('https://api.thecatapi.com/v1/breeds/' + id).then((res) => {
			this.setState({
				cat: res.data,
			});
			console.log(res);
		});
	}
	handleGoBack = () => {
		this.props.history.push('/');
	};
	render() {
		const { cat } = this.state;
		const catResults = cat ? (
			<div className='post'>
				<h5 className='black-text '>Name: {cat.name}</h5>
				<h5 className='card-title black-text '>Origin: {cat.origin}</h5>
				<h5 className='card-title black-text'>
					Temperament: {cat.temperament}
				</h5>
				<h5 className='card-title black-text'>
					Weight: {cat.weight.metric} Kg
				</h5>
				<h5 className='card-title black-text'>
					Intelligence: {cat.intelligence}
				</h5>
				<h5 className='card-title black-text'>
					Dog Friendly: {cat.dog_friendly}
				</h5>
				<h5 className='card-title black-text'>
					Energy Level: {cat.energy_level}
				</h5>
				<h5 className='card-title black-text'>Hair Less: {cat.hairless}</h5>
				<p className='black-text '>Description: {cat.description}</p>
				<i
					onClick={this.handleGoBack}
					className='material-icons '
					style={{ cursor: 'pointer', marginTop: '15px' }}
				>
					arrow_back
				</i>
			</div>
		) : (
			<div className='center'>Loading Cat...</div>
		);
		return (
			<div className='container'>
				<h4>{catResults}</h4>
			</div>
		);
	}
}

export default CatParams;
