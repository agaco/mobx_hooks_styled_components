
import {
  DATA_GET_REQUEST,
  // SET_LOADING,
} from '../utility/constants';
import { getSources } from '../../../api/config';


const getVendorsList = (dispatch) => {
  // eslint-disable-next-line no-console
  console.log('jhgjhghgjhg');
  // dispatch({
  //   type: SET_LOADING,
  // });

  getSources()
    .then(res => res && res.ok && res.json())
    .then(res => dispatch({
      type: DATA_GET_REQUEST,
      payload: res.sources,
    }));
};

export {
  getVendorsList,
};
