import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/index.action";

type Action = ActionType<typeof actions>;


export interface homeForSaleState {
    selectFavorite: boolean,
    price: number,
    showEditButton: boolean
}

const initState = {
    selectFavorite: false,
    price: 0,
    showEditButton: false
}

export const homeforsaleReducer = (state: homeForSaleState = initState, action: Action): homeForSaleState => {
    switch (action.type) {
        case getType(actions.homeSelected):
            return Object.assign({}, state, { selectFavorite: action.payload });
        case getType(actions.checkPriceChange):
            return Object.assign({}, state,
                { showEditButton: action.payload != state.price });
        case getType(actions.buttonCancel):
            return Object.assign({}, state,
                { showEditButton: false });
        case getType(actions.homePriceChange):
            return Object.assign({}, state,
                { price: action.payload, showEditButton: false });
        default:
            return state;
    }
}