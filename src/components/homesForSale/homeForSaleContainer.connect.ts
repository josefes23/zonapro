import { connect } from "react-redux";
import { RootState } from "../../reducers/index.reducer";
import * as actions from "../../actions/index.action";
import { ActionType, action } from "typesafe-actions";
import { bindActionCreators } from "redux";
import { HomeForSaleContainer } from "./homeForSaleContainer";
import DataServices from "../../services/dataServices";

type Action = ActionType<typeof actions>;

interface OwnProps { }

const mapStateToProps = (state: RootState) => ({
	price: state.homeforsale.price,
	m2: state.homeforsale.m2,
});

const mapDispatchToProps = (dispatch: any, props: OwnProps) => bindActionCreators({
	handleClickFavorite: (data: boolean) => {
		DataServices.getInstance().saveFavoriteHome(!data);
		return actions.homeSelected(!data)
	},
	handleOnClickEdit: (data: number) => {
		DataServices.getInstance().savePriceHome(data);
		return actions.homePriceChange(data)
	},
	loadData: (price: number, favorite: boolean, m2: number) => actions.homeloadData(price, favorite, m2),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeForSaleContainer);