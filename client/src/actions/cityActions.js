import { GET_CITIES, ADD_CITY, DELETE_CITY, LOADING_CITIES } from "./types";
import axios from "axios";

export const getCities = () => dispatch => {
  dispatch(setLoadingCities());
  axios.get("/api/cities/all").then(res =>
    dispatch({
      type: GET_CITIES,
      payload: res.data
    })
  );
};

export const setLoadingCities = () => {
  return {
    type: LOADING_CITIES
  };
};
