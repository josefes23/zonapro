import * as React from "react";
import * as style from "./favoriteButton.css";

interface props {
	onclick?: any,
	selected?: boolean,
	selectedHeartCssClass?: string,
	buttonCssClass?: string
}

export default class FavoriteButton extends React.Component<props> {
	selected: boolean;

	constructor(props: props) {
		super(props);
		this.selected = props.selected == undefined ? false : props.selected;
	}

	render() {
		return (
			<button
				className={`${style.favoriteButtonBase} ${this.props.buttonCssClass || ""}`}
				onClick={() => this.props.onclick(this.selected)}>
				<span className={`glyphicon glyphicon-heart 
				${this.selected == true ? this.props.selectedHeartCssClass || style.heartSelected : ""}`}></span>
			</button >
		)
	}
}