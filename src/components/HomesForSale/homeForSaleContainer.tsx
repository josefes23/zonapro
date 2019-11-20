import * as React from "react";
import * as style from "./container.css";
import CarouselContainer from "../carousel/carousel.connect"
import EditPriceButton from "../buttons/editable/editPrice.button";
import { FormatNumber } from "../../services/someServices";



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
				<section className="homeDescriptionContainer col-xs-12 col-sm-7">
					<div className="homeTitle">
						<h4>Bedroom House In New Forestdale</h4>
						<p>3421 Sandon Place, Winston Salem, NC 27104</p>
					</div>
					<div className="homeDescription">
						<p>
							Gorgeous brick ranch w/ open tiled & TREX decked porch over looking pool/spa & beautiful landscaped backyard. Covered porch with pizza oven and bar. Hardwood flrs, gourmet kitchen, massive master bath w/ heated flrs. Full water proof finished basement/kitchenette, full bath plus bonus room, laundry, & movie room. Potential for separate living quarters. Leaf guard system is transferable.
						</p>
					</div>
					<div className="homeEditPrice">
						<EditPriceButton
							value={this.props.price}
							handleOnClickEdit={this.props.handleOnClickEdit}
							formatNumber={(value: number) => FormatNumber(value, 2, "$")} />
					</div>
					<div className="row homeOtherDetail">
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