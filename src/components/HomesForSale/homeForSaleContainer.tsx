import * as React from "react";
import * as style from "./container.css";
import CarouselContainer from "../sliders";


export class HomeForSaleContainer extends React.Component<any, any>{

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className={`row ${style.homeForSaleContainer}`}>
				<section className={`${style.sliderContainer} col-xs-12 col-sm-5`}>
					<CarouselContainer ></CarouselContainer>
				</section>
			</div>
		);
	}
}