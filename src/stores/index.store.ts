import { createStore, compose, applyMiddleware } from "redux";
import reducers from "../reducers/index.reducer";

import { RootState } from "../reducers/index.reducer";
import { ActionType } from "typesafe-actions";
import * as actions from "../actions/index.action";
import { createEpicMiddleware } from "redux-observable";
// import epics from "../../epics/index.epic";

type Action = ActionType<typeof actions>;

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
	}
}

const composeEnhancers = (
	window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>();




function configureStore(initialState: RootState = { homeforsale: { selectFavorite: false } }) {
	// configure middlewares
	const middlewares = [
		epicMiddleware,
	];
	// compose enhancers
	const enhancer = composeEnhancers(
		applyMiddleware(...middlewares)
	);
	// create store
	return createStore(
		reducers,
		initialState,
		enhancer
	);
}

const store = configureStore();

// epicMiddleware.run(epics);

export default store