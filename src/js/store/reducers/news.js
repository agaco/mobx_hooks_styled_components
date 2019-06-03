import {
  DATA_GET_REQUEST,
  SET_LOADING,
} from '../utility/constants';

const initialState = {
  countries: [],
  news: [],
  isLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DATA_GET_REQUEST:
      return {
        ...state,
        isLoading: false,
        countries: action.payload,
      };
    default:
      return state;
  }
};
