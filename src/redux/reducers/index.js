import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
// import { pcPartsReducer } from './pcPartsReducer';

const rootReducer = combineReducers({
  user: authReducer,
  //   pcParts: pcPartsReducer,
});

export default rootReducer;
