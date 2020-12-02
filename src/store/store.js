import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const rootReducer = combineReducers({ store: reducer });

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
