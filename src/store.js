import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const sagaMiddleware = createSagaMiddleware();
// export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
export const store = createStore(reducers);
export const startSaga = sagas => sagaMiddleware.run(sagas);
