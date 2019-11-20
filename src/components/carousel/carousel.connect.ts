import { connect } from "react-redux";
import { RootState } from "../../reducers/index.reducer";
import * as actions from "../../actions/index.action";
import { ActionType, action } from "typesafe-actions";
import { bindActionCreators } from "redux";
import CarouselContainer from "./carousel";
import DataServices from "../../services/dataServices";

type Action = ActionType<typeof actions>;

interface OwnProps { }

const mapStateToProps = (state: RootState) => ({
    selectFavorite: state.homeforsale.selectFavorite,
    price: state.homeforsale.price
});

const mapDispatchToProps = (dispatch: any, props: OwnProps) => bindActionCreators({
	handleClickFavorite: (data: boolean) =>{
		DataServices.getInstance().saveFavoriteHome(!data);
		return actions.homeSelected(!data)
	},
	handleOnClickEdit: (data: number) => {
		DataServices.getInstance().savePriceHome(data);
		return actions.homePriceChange(data)
	},
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CarouselContainer);