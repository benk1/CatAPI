import React from 'react';
import { NavLink } from 'react-router-dom';
const Cat = ({
	cat: { id, name, origin, life_span, weight, image, description, url },
}) => {
	//const { id, name, origin, life_span, weight, image, description } = props.cat;
	//let rst = cat.image.url;
	//console.log('my cat', cat.image.url);
	//const keys = Object.keys(cat.image);
	//let values = Object.values(cat.image);
	//console.log('IMAGE', image);
	//const formatImageUrl = values.map((value) => console.log(value));
	//console.log('YEAH', formatImageUrl);

	//console.log('in Cat Component', id);
	return (
		<>
			<div className='row center' key={id}>
				<div className='col s12 m6 l8'>
					<div className=' card orange lighten-1'>
						<div className='card-content white-text  '>
							<NavLink to={'/' + id}>
								<span className='card-title blue-text darken-5'>
									Name: {name}
								</span>
							</NavLink>

							<span className='card-title origin black-text accent-4'>
								Origin: {origin}
							</span>

							<span className='card-title origin black-text accent-4'>
								Life Span: {life_span} Years
							</span>
							<span className='card-title origin black-text accent-4'>
								Weight: {weight.metric} Kg
							</span>

							<p className='black-text accent-4'>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cat;
