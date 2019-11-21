import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/index.action";

type Action = ActionType<typeof actions>;


export interface homeForSaleState {
	selectFavorite: boolean,
	price: number,
	m2: number
}

const initState = {
	selectFavorite: false,
	price: 0,
	m2: 0
}

export const homeforsaleReducer = (state: homeForSaleState = initState, action: Action): homeForSaleState => {
	switch (action.type) {
		case getType(actions.homeSelected):
			return Object.assign({}, state, { selectFavorite: action.payload });
		case getType(actions.homePriceChange):
			return Object.assign({}, state,
				{ price: action.payload });
		case getType(actions.homeloadData):
			return Object.assign({}, state,
				{
					price: action.payload.price,
					selectFavorite: action.payload.favorite,
					m2: action.payload.m2
				});
		default:
			return state;
	}
}