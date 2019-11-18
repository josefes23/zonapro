import { combineReducers } from "redux";
import { homeforsaleReducer, homeForSaleState } from "./homeForSale.reducer";

export type RootState = {
    homeforsale: homeForSaleState
};

const reducers = combineReducers({
    homeforsale: homeforsaleReducer
});

export default reducers;