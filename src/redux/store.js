import { legacy_createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = legacy_createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

const storeFront = {store, persistor}

export default storeFront;