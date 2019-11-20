import { connect } from "react-redux";
import { RootState } from "../../reducers/index.reducer";
import * as actions from "../../actions/index.action";
import { ActionType, action } from "typesafe-actions";
import { bindActionCreators } from "redux";
import { HomeForSaleContainer } from "./homeForSaleContainer";

type Action = ActionType<typeof actions>;

interface OwnProps { }

const mapStateToProps = (state: RootState) => ({
	price: state.homeforsale.price,
});

const mapDispatchToProps = (dispatch: any, props: OwnProps) => bindActionCreators({
    handleClickFavorite: (data: boolean) => actions.homeSelected(!data),
    handleOnClickEdit: (data: number) => actions.homePriceChange(data),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeForSaleContainer);