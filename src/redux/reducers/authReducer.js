import * as types from '../action-types/';

const initialState = {
  user: null,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case types.LOGIN_REQUEST:
      return {
        user: null,
      };

    case types.LOGIN_REQUEST_SUCCESS:
      return {
        user: action.payload,
        
      };

    case types.LOGIN_REQUEST_FAIL:
      return {
        error: action.payload,
      };

    case types.SET_LOGGED_IN_USER:
      return {
        user: action.payload,
      };

    case types.LOG_OUT_USER:
      return initialState;

    default:
      return initialState;
  }
};

export default authReducer;