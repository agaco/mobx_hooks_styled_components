import {
  DATA_GET_REQUEST,

} from '../utility/constants';

const initialState = {
  countries: ['jhhgjg'],
  news: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA_GET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
