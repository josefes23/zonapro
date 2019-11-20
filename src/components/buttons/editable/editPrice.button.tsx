import * as React from "react";
import * as style from "./editPriceButton.css";


interface props {
	handleOnClickEdit?: (value: number) => any,
	value: number,
	customCssClass?: string,
	formatNumber?: (value: number) => string
}

export default class EditPriceButton extends React.Component<props> {
	input: any = React.createRef();
	state = {
		focused: false,
		showEditButton: false,
		currentPrice: 0
	}

	constructor(props: props) {
		super(props)
	}

	onclick = (event: any) => {
		this.setState({ focused: !this.state.focused }, () => {
			this.input.current.focus();
		});
	}

	onBlur = () => {
		setTimeout(() => {
			this.setState({ focused: false, showEditButton: false })
		}, 100);
	}

	onFocus = () => {
		this.setState({ focused: true })
	}

	handleOnClickCancel = () => {
		this.setState({ showEditButton: false })
	}

	handleOnchange = (price: number) => {
		this.setState({ showEditButton: this.props.value != price, currentPrice: price })
	}

	render() {
		return (
			<div className={`${style.editPriceContainer} ${this.props.customCssClass || ""}`}>
				{this.state.showEditButton == true ?
					<div>
						<button onClick={() => {
							return this.props.handleOnClickEdit(this.state.currentPrice)
						}}>Edit</button>
						<button onClick={() => {
							return this.handleOnClickCancel()
						}}>Cancel</button>
					</div>
					: <div className={style.emptyButtonsContainer}></div>}
				<div>
					{this.state.focused == false ?
						<div className={style.formatPrice}
							onClick={this.onclick}>
							{typeof this.props.formatNumber === 'function' ?
								this.props.formatNumber(this.props.value) : this.props.value}
						</div>
						: null}

					{this.state.focused == true ?
						<input type="number"
							min={0}
							ref={this.input}
							onFocus={this.onFocus}
							onBlur={this.onBlur}
							onChange={(event: any) => this.handleOnchange(parseFloat(event.target.value))}
							defaultValue={this.props.value} /> : null}
				</div>
			</div >
		)
	}
}