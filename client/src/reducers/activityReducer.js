import { GET_ACTIVITIES, LOADING_ACTIVITIES } from "../actions/types";

const initialState = {
  activities: [],
  loading: false
};

// in the reducer we have to create our action TYPE

// this function has to get 2 parameters
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        //it returns everything is in the state which is initialState
        ...state,
        activities: action.payload,
        loading: false
      };
    // case DELETE_CITY:
    //   return {
    //     ...state,
    //     cities: state.cities.filter(city => city.id !== action.payload)
    //   };
    case LOADING_ACTIVITIES:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
  console.log(this.activities);
}
