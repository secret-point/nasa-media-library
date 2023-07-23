import {
  GET_SEARCHED_IMAGES,
  LOAD_DATA_LOADING,
  LOAD_DATA_ERROR,
} from "./actions";

const initialState = {
  searchedImages: [],
  loading: false,
  error: "",
};

const searchedImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA_LOADING:
      return { ...state, loading: true };

    case GET_SEARCHED_IMAGES:
      return { ...state, searchedImages: action.payload, loading: false };

    case LOAD_DATA_ERROR:
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default searchedImagesReducer;
