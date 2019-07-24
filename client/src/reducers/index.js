// this file is basically a meeting place for all the reducers

import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";

// we export a function that export all the reducers we want
export default combineReducers({
  city: cityReducer,
  itinerary: itineraryReducer,
  activity: activityReducer
  // ** auth: authReducer;

  // we can have as many reducer as we want
});
