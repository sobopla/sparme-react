import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise";
import reducer from "./reducers";

const middleware = applyMiddleware(promise, thunk);

const store = createStore(reducer, middleware);

export default store
