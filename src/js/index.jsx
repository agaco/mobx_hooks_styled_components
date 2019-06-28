import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';
import { makeTheme } from 'bootstrap-styled';

import App from './components/App';
import stores from './store';


const theme = makeTheme({
  // '$body-bg': 'darkslategrey',
  // '$body-color': 'lightgrey',
  // '$card-columns-count-lg': '4',
  // '$card-columns-count-md': '25%',
  '$card-border-color': 'red',
});

ReactDOM.render(
  <BootstrapProvider theme={theme}>
    <Provider store={stores}>
      <Fragment>
        <App />
      </Fragment>
    </Provider>
  </BootstrapProvider>,
  document.getElementById('app'),
);
