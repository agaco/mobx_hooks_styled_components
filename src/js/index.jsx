import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BootstrapProvider from '@bootstrap-styled/provider';

import App from './components/App';
import stores from './store';

ReactDOM.render(
  <BootstrapProvider theme={{ '$brand-danger': 'green' }}>
    <Provider store={stores}>
      <Fragment>
        <App />
      </Fragment>
    </Provider>
  </BootstrapProvider>,
  document.getElementById('app'),
);
