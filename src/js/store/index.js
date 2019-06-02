import { applyMiddleware, createStore, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
// import promise from 'redux-promise-middleware';
import rootReducer from './reducers';

// eslint-disable-next-line no-undef,no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const middleware = composeEnhancers(applyMiddleware(promise(), thunk, logger));
const middleware = composeEnhancers(applyMiddleware(thunk, logger));

export default createStore(rootReducer, middleware);
