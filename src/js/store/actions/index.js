
import {
  DATA_GET_REQUEST,
  SET_LOADING,
} from '../utility/constants';
import { getSources } from '../../../api/config';


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

export {
  getVendorsList,
};
