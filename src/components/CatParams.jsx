import React, { Component } from 'react';
import axios from 'axios';
//import Cat from './Cat';
class CatParams extends Component {
	state = {
		image: null,
		cat: null,
		isLoading: true,
	};

	async componentDidMount() {
		let id = this.props.match.params.cat_id;
		//let id = this.props.id;
		const catDataUrl = 'https://api.thecatapi.com/v1/breeds/';
		const searchImgUrl = 'https://api.thecatapi.com/v1/images/search?breed_id=';
		const [catResponse, imageResponse] = await Promise.all([
			axios.get(`${catDataUrl}${id}`),
			axios.get(`${searchImgUrl}${id}`),
		]);
		//const { data: cat } = axios.get(`${catDataUrl}${id}`);
		//console.log('CAT', cat);
		//const { data: image } = await axios.get(`${searchImgUrl}${id}`);
		//console.log('IMAGE', image);

		//image.url = image[0].url;

		this.setState({
			cat: catResponse.data,
			image: imageResponse.data,
			isLoading: false,
		});
		console.log('RES FROM CDM CatParams', catResponse.data);
	}

	/*async componentDidMount() {
		await this.fetchCatData();
	}*/
	/*fetchCatData = async () => {
		//const catsDataUrl = 'https://api.thecatapi.com/v1/breeds';
		const searchImgUrl = 'https://api.thecatapi.com/v1/images/search?breed_id=';
		try {
			//const catsResponse = await axios.get(catsDataUrl);
			//const cats = catsResponse.data;

			await Promise.allSettled(
				this.props.cats.map(async (cat) => {
					const response = await axios.get(`${searchImgUrl}${cat.id}`);
					cat.url = response.data[0].url; // data is an array with a single object
				})
			);

			this.setState({ cats }); // I changed state name for cats to be more semantic
			console.log('INFetchData', cats);
		} catch (error) {
			console.log(error);
		}
	};*/

	handleGoBack = () => {
		this.props.history.push('/');
	};
	render() {
		const { cat, isLoading, image } = this.state;
		console.log('IN RENDER', cat);

		if (isLoading) return <h1>LOADING...</h1>;

		console.log('FROMPARAMS', cat);

		const catResults = cat ? (
			<div className='card white lighten-4 post'>
				<h5 className='black-text '>Name: {cat.name}</h5>
				<div className=' catInParams'>
					<img src={image[0].url} alt='Image' />
				</div>
				<h5 className='card-title black-text card-title origin black-text accent-4 '>
					Origin: {cat.origin}
				</h5>
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
				<h5 className='card-title black-text'>Tail: {cat.suppressed_tail}</h5>
				<h5 className='card-title black-text'>
					Friendly: {cat.stranger_friendly}
				</h5>
				<p className='black-text '>Description: {cat.description}</p>
				<a className='btn-floating btn-large waves-effect waves-light black'>
					{' '}
					<i
						onClick={this.handleGoBack}
						className='material-icons orange-text  '
						//style={{ cursor: 'pointer', marginTop: '15px' }}
					>
						arrow_back
					</i>
				</a>
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
