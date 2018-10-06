import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import sagas from "./sagas";
import App from "./App";
import { store, startSaga } from "./store";

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

// startSaga(sagas);
render(Root, document.getElementById("root"));
