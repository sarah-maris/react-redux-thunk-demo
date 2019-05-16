import logger from './logger';
import thunk from 'redux-thunk';
import { applyMiddleware, compose } from 'redux';

// compose enhancers to use Redux Dev Tools
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

// apply middleware to enhancer and export
const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger)
);
export default enhancer;
