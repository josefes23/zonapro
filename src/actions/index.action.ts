import { createAction, createAsyncAction } from "typesafe-actions";

import {
	HOMEFORSALE_SELECT,
	HOME_PRICE_CHANGE
} from "../constants/index";

export const homeSelected = createAction(HOMEFORSALE_SELECT, resolve => (select: boolean) => resolve(select))
export const homePriceChange = createAction(HOME_PRICE_CHANGE, resolve => (price: number) => resolve(price))
