import { GET_ACTIVITIES, LOADING_ACTIVITIES } from "./types";
import axios from "axios";

export const getActivities = itineraryId => dispatch => {
  dispatch(setLoadingActivities());
  axios.get("/api/activities/" + itineraryId).then(res =>
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data
    })
  );
};

export const setLoadingActivities = () => {
  return {
    type: LOADING_ACTIVITIES
  };
};
