import {
  DATA_GET_REQUEST,

}

export const setPaymentMethod = data => (dispatch) => {
  dispatch({
    type: SET_PAYMENT_METHOD,
    payload: data,
  });
};

