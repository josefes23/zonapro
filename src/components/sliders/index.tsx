import * as React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, ImageWithZoom, ButtonFirst, ButtonLast, DotGroup, Image } from 'pure-react-carousel';
import * as style from "./sliderCustom.css";
import FavoriteButton from '../buttons/favorite/favorite.button';

export interface CarouselProps {
	selectFavorite?: boolean,
	handleClickFavorite?: any
}

export default class extends React.Component<CarouselProps> {

	constructor(props: CarouselProps) {
		super(props);
	}

	render() {
		return (
			<CarouselProvider
				infinite={true}
				visibleSlides={1}
				totalSlides={3}
				step={1}
				naturalSlideWidth={200}
				naturalSlideHeight={150}
				hasMasterSpinner
			>
				<FavoriteButton
					buttonCssClass={style.favoriteButtonCustom}
					onclick={this.props.handleClickFavorite}
					selected={this.props.selectFavorite}
				/>
				<Slider >
					<Slide index={0}>
						<Image hasMasterSpinner={true} src="./media/353012_1.jpg" />
					</Slide>
					<Slide index={1}>
						<Image hasMasterSpinner={true} src="./media/957087_1.jpg" />
					</Slide>
					<Slide index={2}>
						<Image hasMasterSpinner={true} src="./media/100193394_0.jpg" />
					</Slide>
				</Slider>
				<ButtonBack className={`${style.buttonCustom} ${style.buttonBack}`}>
					<span className="glyphicon glyphicon-chevron-left"></span>
				</ButtonBack>
				<ButtonNext className={`${style.buttonCustom} ${style.buttonNext}`}>
					<span className="glyphicon glyphicon-chevron-right"></span>
				</ButtonNext>
				<DotGroup className={style.dotCustom} />
			</CarouselProvider>
		)
	}
}