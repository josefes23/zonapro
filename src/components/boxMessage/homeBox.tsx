import * as React from 'react';
import * as style from './homeBox.css';

export default class HomeBox extends React.Component {
	
	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className={style.boxContainer}>
				<div>
					<h3>10703 S Troy Street</h3>
					<h6><span className="glyphicon glyphicon-map-marker"></span>Chicago, IL 60655</h6>
				</div>
				<div>
					<p>
					Motivated seller**fantastic brick bungalow in the heart of mount greenwood! come see this adorable home with 2 bedrooms/2 baths and finished basement, complete with open floor plan, laminate floors and beautiful updated bathrooms! the fenced in backyard with covered porch is perfect for grilling or outdoor entertaining!</p>
				</div>
			</div>
		)
	}
} 