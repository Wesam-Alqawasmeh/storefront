import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import myStore from "./store";
import cart from "./cart";
import products from "./products";

import thunk from "./middleware/thunk";

let reducers = combineReducers({ myStore, cart, products });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
