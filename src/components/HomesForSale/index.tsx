import * as React from "react";
import * as ReactDOM from "react-dom";
import { HomeForSaleContainer } from "./homeForSaleContainer";
import { Provider } from "react-redux";
import store from "../../stores/index.store"

ReactDOM.render(
    <Provider store={store}>
        <HomeForSaleContainer />
    </Provider>,
    document.getElementById("index")
)