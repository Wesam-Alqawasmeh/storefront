import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import myStore from "./store";
import cart from "./cart";
import products from "./products";

let reducers = combineReducers({ myStore, cart, products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
