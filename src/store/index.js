import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import myStore from "./store";

let reducers = combineReducers({ myStore });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
