
import {
  DATA_GET_REQUEST,
  SET_LOADING,
  // DATA_GET_BY_HEADLINE,
} from '../utility/constants';
import {
  getSources,
  getDataByHeadline,
} from '../../../api/config';


const getVendorsList = (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });

  getSources()
    .then(res => res && res.ok && res.json())
    .then((res) => {
      const categories = [...new Set(res.sources.map(item => item.category))];
      dispatch({
        type: DATA_GET_REQUEST,
        payload: res.sources,
        categories,
      });
    });
};
const getDataByTitle = (dispatch, title) => {
  dispatch({
    type: SET_LOADING,
  });

  getDataByHeadline(title)
    .then(res => res && res.ok && res.json())
    .then((res) => {
      console.log('res', res);
    });
};

export {
  getVendorsList,
  getDataByTitle,
};
