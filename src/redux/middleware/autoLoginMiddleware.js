import { AUTO_LOGIN } from '../action-types';
import { setUser } from '../actions';

export const autoLoginMiddleware = (store) => (next) => (action) => {
  if (action.type === AUTO_LOGIN) {
    console.group('[autoLoginMiddleware]');
    if (localStorage.getItem('auth.token')) {
      const user = localStorage.getItem('auth.token');
      store.dispatch(setUser(user));
    }
    console.groupEnd();
  } else {
    next(action);
  }
};

