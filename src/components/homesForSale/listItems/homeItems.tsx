import * as React from 'react';
import * as style from './homeItems.css';

interface props {
	cssClassCustom?: string
}

export default class HomeItems extends React.Component<props> {
	constructor(props: any) {
		super(props)
	}

	render() {
		return (
			<ul className={`${style.homeItems} ${this.props.cssClassCustom || ""}`}>
				<li>280 m2</li>
				<li>3 Dormitorios</li>
				<li>2 baños</li>
				<li>2 cocheras</li>
			</ul>
		)
	}
}