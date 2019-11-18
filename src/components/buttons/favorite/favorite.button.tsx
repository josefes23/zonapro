import * as React from "react";
import * as style from "./favoriteButton.css";

interface props {
	onclick?: any,
	selected?: boolean,
	selectedHeartCssClass?: string,
	buttonCssClass?: string
}

export default class FavoriteButton extends React.Component<props> {

	constructor(props: props) {
		super(props);
	}

	render() {
		return (
			<button
				className={`${style.favoriteButtonBase} ${this.props.buttonCssClass || ""}`}
				onClick={() => this.props.onclick(this.props.selected)}>
				<span className={`glyphicon glyphicon-heart 
				${this.props.selected == true ? this.props.selectedHeartCssClass || style.heartSelected : ""}`}></span>
			</button >
		)
	}
}