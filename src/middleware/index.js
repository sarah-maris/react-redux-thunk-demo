import logger from './logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// compose enhancers to use Redux DevTools
const composeEnhancers = composeWithDevTools({
  // add optional settings here
  trace: true
});

// apply middleware to enhancer and export
const enhancer = composeEnhancers(applyMiddleware(thunk, logger));

export default enhancer;
