import React from 'react';
import { Link } from 'react-router-dom';
const Cat = (props) => {
	const { id, name, origin, life_span, weight, description } = props.cat;
	//console.log('my cat',cat.name);
	return (
		<>
			<div className='row center' key={id}>
				<div className='col s12 m6 l8'>
					<div className=' card orange lighten-1'>
						<div className='card-content white-text  '>
							<Link to={'/' + id}>
								<span className='card-title blue-text darken-5'>
									Name: {name}
								</span>
							</Link>

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
