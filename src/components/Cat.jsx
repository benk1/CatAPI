import React from 'react';
import {Link} from 'react-router-dom'
const Cat = (props) => {
	const { cat } = props;
	//console.log('my cat',cat.name);
	return (
		<>
			<div className='row center' key={cat.id}>
				<div className='col s12 m6'>
					<div className=' card orange lighten-1'>
						<div className='card-content white-text  '>
							<Link to={'/' + cat.id}>
								<span className='card-title blue-text darken-5'>
									Name: {cat.name}
								</span>
							</Link>

							<span className='card-title origin black-text accent-4'>
								Origin: {cat.origin}
							</span>

							<span className='card-title origin black-text accent-4'>
								Life Span: {cat.life_span} Years
							</span>
							<span className='card-title origin black-text accent-4'>
								Weight: {cat.weight.metric} Kg
							</span>

							<p className='black-text accent-4'>{cat.description}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cat;
