import { AUTO_LOGIN, BLOCKED_ACTION } from '../action-types';

export const autoLoginAction = () => ({
  type: AUTO_LOGIN,
});

export const blockedAction = () => ({
  type: BLOCKED_ACTION,
});
