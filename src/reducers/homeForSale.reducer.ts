import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/index.action";

type Action = ActionType<typeof actions>;

export interface homeForSaleState {
    selectFavorite: boolean

}

const initState = {
    selectFavorite: false
}

export const homeforsaleReducer = (state: homeForSaleState = initState, action: Action): homeForSaleState => {
    switch (action.type) {
		case getType(actions.homeSelected):
			return Object.assign({}, state, { selectFavorite: action.payload });
        default:
            return state;
    }
}