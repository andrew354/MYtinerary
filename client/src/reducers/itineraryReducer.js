import { GET_ITINERARY_BY_CITY, LOADING_ITINERARY } from "../actions/types";

const initialState = {
  itineraries: [],
  loading: false
};

// in the reducer we have to create our action TYPE

// this function has to get 2 parameters
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITINERARY_BY_CITY:
      return {
        //it returns everything is in the state which is initialState
        ...state,
        itineraries: action.payload,
        loading: false
      };
    // case DELETE_CITY:
    //   return {
    //     ...state,
    //     cities: state.cities.filter(city => city.id !== action.payload)
    //   };
    case LOADING_ITINERARY:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
