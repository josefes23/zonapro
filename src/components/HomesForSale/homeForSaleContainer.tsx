import * as React from "react";
import * as style from "./container.css";
import CarouselContainer from "../carousel/carousel.connect"
import EditPriceButton from "../buttons/editable/editPrice.button";
import { FormatNumber } from "../../services/someServices";
import HomeBox from "../boxMessage/homeBox";



export class HomeForSaleContainer extends React.Component<any, any>{

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className={`row ${style.homeForSaleContainer}`}>
				<section className={`${style.sliderContainer} col-xs-12 col-sm-5`}>
					<CarouselContainer>
					</CarouselContainer>
				</section>
				<section className="col-xs-12 col-sm-7">
					<HomeBox/>
					<div className="homeEditPrice">
						<EditPriceButton
							value={this.props.price}
							handleOnClickEdit={this.props.handleOnClickEdit}
							formatNumber={(value: number) => FormatNumber(value, 2, "$")} />
					</div>
					<div className="row">
						<div className="col-xs-8">
							<ul className="list-inline">
								<li>280 m2</li>
								<li>3 Dormitorios</li>
								<li>2 baños</li>
								<li>2 cocheras</li>
							</ul>
						</div>
						<div className="col-xs-4">
							<input type="button" className="btn btn-large btn-block btn-default" value="Conectar"></input>
						</div>
					</div>
				</section>
			</div>
		);
	}
}