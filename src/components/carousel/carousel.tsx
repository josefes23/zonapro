import * as React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup, Image } from 'pure-react-carousel';
import * as style from "./sliderCustom.css";
import FavoriteButton from '../buttons/favorite/favorite.button';
import EditPriceButton from '../buttons/editable/editPrice.button';
import { FormatNumber } from '../../services/numberServices';
import { HomeDetails } from '../lists/homeDetails';

export interface CarouselProps {
	selectFavorite?: boolean,
	showEditButton?: boolean,
	handleOnClickCancel?: any,
	handleClickFavorite?: any,
	handleOnChangePrice?: any,
	handleOnClickEdit?: any,
	price: number
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
				totalSlides={7}
				step={1}
				naturalSlideWidth={200}
				naturalSlideHeight={160}
				hasMasterSpinner
			>
				<FavoriteButton
					buttonCssClass={style.favoriteButtonCustom}
					onclick={this.props.handleClickFavorite}
					selected={this.props.selectFavorite}
				/>
				<Slider >
					<Slide index={0}>
						<Image hasMasterSpinner={true} src="./media/1.jpg" />
					</Slide>
					<Slide index={1}>
						<Image hasMasterSpinner={true} src="./media/2.jpg" />
					</Slide>
					<Slide index={2}>
						<Image hasMasterSpinner={true} src="./media/3.jpg" />
					</Slide>
					<Slide index={3}>
						<Image hasMasterSpinner={true} src="./media/4.jpg" />
					</Slide>
					<Slide index={4}>
						<Image hasMasterSpinner={true} src="./media/5.jpg" />
					</Slide>
					<Slide index={5}>
						<Image hasMasterSpinner={true} src="./media/6.jpg" />
					</Slide>
					<Slide index={6}>
						<Image hasMasterSpinner={true} src="./media/7.jpg" />
					</Slide>
				</Slider>
				<ButtonBack className={`${style.buttonCustom} ${style.buttonBack}`}>
					<span className="glyphicon glyphicon-menu-left"></span>
				</ButtonBack>
				<ButtonNext className={`${style.buttonCustom} ${style.buttonNext}`}>
					<span className="glyphicon glyphicon-menu-right"></span>
				</ButtonNext>
				<DotGroup className={style.dotCustom} />
				<EditPriceButton
					value={this.props.price}
					handleOnClickEdit={this.props.handleOnClickEdit}
					customCssClass={`${style.editButtonCustom} visible-xs`}
					formatNumber={(value: number) => FormatNumber(value, 2, "$")} />
				<HomeDetails cssClassCustom={`${style.itemsCustom} visible-xs`} />
			</CarouselProvider>
		)
	}
}