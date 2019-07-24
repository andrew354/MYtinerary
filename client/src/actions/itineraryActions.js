import { GET_ITINERARY_BY_CITY, LOADING_ITINERARY } from "./types";
import axios from "axios";

export const getItineraryByCity = cityId => dispatch => {
  dispatch(setLoadingItineraries());
  axios.get("/api/itineraries/" + cityId).then(res =>
    dispatch({
      type: GET_ITINERARY_BY_CITY,
      payload: res.data
    })
  );
};

export const setLoadingItineraries = () => {
  return {
    type: LOADING_ITINERARY
  };
};
