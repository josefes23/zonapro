import * as React from "react";
import * as style from "./container.css";
import CarouselContainer from "../carousel/carousel.connect"
import EditPriceButton from "../buttons/editable/editPrice.button";
import { FormatNumber } from "../../services/someServices";
import HomeBox from "../boxMessage/homeBox";
import { HomeDetails } from "../lists/homeDetails";
import EmailModal from "../modals/sendEmail/emailModal";


export class HomeForSaleContainer extends React.Component<any, any>{
	state = { showModal: false };
	constructor(props: any) {
		super(props);
	}

	handleClick = () => {
		this.setState({ showModal: !this.state.showModal })
	}

	render() {
		return (
			<div className={`row-no-gutters ${style.homeForSaleContainer}`}>
				<section className={`${style.carouselContainer} col-xs-12 col-sm-5`}>
					<CarouselContainer>
					</CarouselContainer>
				</section>
				<section className={`${style.detailContainer} col-xs-12 col-sm-7`}>
					<HomeBox />
					<div className="hidden-xs">
						<EditPriceButton
							value={this.props.price}
							handleOnClickEdit={this.props.handleOnClickEdit}
							formatNumber={(value: number) => FormatNumber(value, 2, "$")} />
					</div>
					<div className={`${style.homeItemsContainer} hidden-xs`}>
						<div>
							<div className="col-xs-8">
								<HomeDetails cssClassCustom={`hidden-xs`} />
							</div>
							<div className="col-xs-4">
								<input type="button" className={`${style.contactButton}`} onClick={() => this.handleClick()} value="Contactar"></input>
							</div>
						</div>
					</div>
					<input type="button" className={`${style.contactButton} visible-xs`} onClick={() => this.handleClick()} value="Contactar"></input>
					<EmailModal showModal={this.state.showModal} onCloseModal={this.handleClick}></EmailModal>
				</section>
			</div>
		);
	}
}