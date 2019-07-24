import {
  GET_CITIES,
  ADD_CITY,
  DELETE_CITY,
  LOADING_CITIES
} from "../actions/types";

const initialState = {
  cities: [],
  loading: false
};

// in the reducer we have to create our action TYPE

// this function has to get 2 parameters
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        //it returns everything is in the state which is initialState
        ...state,
        cities: action.payload,
        loading: false
      };
    case DELETE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => city.id !== action.payload)
      };
    case LOADING_CITIES:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
