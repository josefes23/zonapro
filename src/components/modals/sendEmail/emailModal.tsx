import * as React from 'react';
import * as Modal from 'react-modal';
import * as style from './emailModal.css';

interface prop {
	showModal: boolean,
	onCloseModal: any
}

Modal.setAppElement('#index')

export default class EmailModal extends React.Component<prop> {
	input: any = React.createRef();
	state = {
		showModal: false,
		onEmailError: false,
		successRequest: false
	};
	constructor(props: any) {
		super(props)
		this.state.showModal = this.props.showModal;
	}



	componentWillReceiveProps(props: any) {
		this.setState({ showModal: props.showModal });
		if (this.input.current)
			this.input.current.focus();
	}

	afterOpenModal = () => {
		if (this.input.current)
			this.input.current.focus();
	}

	onClose = () => {
		this.setState({ showModal: !this.state.showModal, onEmailError: false });
		this.props.onCloseModal();
	}

	onChange = (event: any) => {
		let email = event.target.value;
		this.setState({ onEmailError: !this.isValidEmail(email) })
	}

	onClickSend = () => {
		setTimeout(() => {
			this.setState({ successRequest: true, showModal: false })
		}, 550);
	}

	onKeyPress = (event: any) => {
		if (event.charCode == 13) {
			this.onClickSend();
		}
	}

	isValidEmail(mail: string) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
	}

	render() {
		return (
			<div>
				<Modal
					isOpen={this.state.showModal}
					onAfterOpen={this.afterOpenModal}
					className={style.modalContainer}
					overlayClassName={style.modalOverload}
					shouldFocusAfterRender={false}
				>
					<button className="" onClick={this.onClose}><span className="glyphicon glyphicon-remove"></span></button>
					<h4>To be contacted please enter your email address</h4>
					<div>
						<h5>Email</h5>
						<input type="text" defaultValue="" placeholder="email@gmail.com" onChange={this.onChange} onKeyPress={this.onKeyPress} />
						{(this.state.onEmailError) ? <div className={style.invalidEmail}>Invalid email</div> : null}
					</div>
					<input type="button" className={`${style.sendEmail}`} value="Send" onClick={this.onClickSend} disabled={this.state.onEmailError}></input>
				</Modal>
				<Modal
					isOpen={this.state.successRequest}
					className={`${style.modalContainer} ${style.successMessage}`}
					overlayClassName={style.modalOverload}
					shouldFocusAfterRender={false}
					onAfterOpen={() => setTimeout(() => {
						this.props.onCloseModal();
						this.setState({ successRequest: false, onEmailError: false })
					}, 2000)}
				>
					<h3>Email send successfully</h3>
					<h1 className="glyphicon glyphicon-ok"></h1>
				</Modal>
			</div >
		)
	}
}