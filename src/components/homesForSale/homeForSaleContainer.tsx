import * as React from "react";
import * as style from "./container.css";
import CarouselContainer from "../carousel/carousel.connect"
import EditPriceButton from "../buttons/editable/editPrice.button";
import { FormatNumber } from "../../services/numberServices";
import HomeBox from "../boxMessage/homeBox";
import { HomeDetails } from "../lists/homeDetails";
import EmailModal from "../modals/sendEmail/emailModal";
import DataServices, { IDataServices } from "../../services/dataServices";

interface homeForSaleProps {
	loadData?: any,
	handleOnClickEdit?: any,
	price?: number
	m2?: number
}

export class HomeForSaleContainer extends React.Component<homeForSaleProps, any>{
	state = { showModal: false };
	private dataServices: IDataServices = DataServices.getInstance();
	constructor(props: homeForSaleProps) {
		super(props);
	}

	componentDidMount() {
		this.props.loadData(
			this.dataServices.getPriceHome(),
			this.dataServices.getFavoriteHome(),
			380
		);
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
					<div className={`hidden-xs ${style.editPriceContainer}`}>
						<EditPriceButton
							value={this.props.price}
							handleOnClickEdit={this.props.handleOnClickEdit}
							formatNumber={(value: number) => FormatNumber(value, 2, "$")} />
						<div className={style.m2Container}><span>$/m2</span> {FormatNumber(this.props.price / this.props.m2, 2)}</div>
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
			</div >
		);
	}
}