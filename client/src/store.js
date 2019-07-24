// applyMiddleware:it is a function that supplies middleware, because we are using thunk, which is a piece of middleware that we need to bring in
// compose: cause we are going to use the redux tools and to use it along with the applyMiddleware we need to wrap it in this compose function
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
//the main goal of the rooReducer is to bring together
// all the other reducers contained in the folder reducer
import rootReducer from "./reducers/index";

//it represents our initial state, empty object for now
const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //the below code you got it from the redux website
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

/// in order to use store, we need to integrate it in App.js
// we do so by bringing in the Provider
