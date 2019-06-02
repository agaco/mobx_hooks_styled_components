import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import stores from './store';

ReactDOM.render(
  <Provider store={stores}>
    <Fragment>
      <App />
    </Fragment>
  </Provider>,
  document.getElementById('app'),
);
