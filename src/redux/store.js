import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const middleware = [thunk];

const rootStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default rootStore;
