import { createAction, createAsyncAction } from "typesafe-actions";

import {
	HOMEFORSALE_SELECT,
} from "../constants/index";

export const homeSelected = createAction(HOMEFORSALE_SELECT, resolve => (select: boolean) => resolve(select))
