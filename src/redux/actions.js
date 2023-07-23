import axios from "axios";

export const GET_SEARCHED_IMAGES = "GET_SEARCHED_IMAGES";
export const LOAD_DATA_LOADING = "LOAD_DATA_LOADING";
export const LOAD_DATA_ERROR = "LOAD_DATA_ERROR";

export const getSearchedImages = (query, startYear, endYear) => {
  const nasa_api_url = `${process.env.REACT_APP_NASA_API}/search`;

  return async (dispatch) => {
    dispatch({ type: LOAD_DATA_LOADING });
    try {
      const response = await axios.get(nasa_api_url, {
        params: {
          q: query,
          media_type: "image",
          year_start: startYear,
          year_end: endYear,
        },
      });
      if (response.data) {
        dispatch({
          type: GET_SEARCHED_IMAGES,
          payload: response.data,
        });
      } else {
        console.log("Unable to fetch data from the API BASE URL!");
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOAD_DATA_ERROR,
        error: error || "Unexpected Error!",
      });
    }
  };
};
