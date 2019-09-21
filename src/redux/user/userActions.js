import { UserActionsTypes } from './userTypes';

export const setCurrentUser = user => ({
  type: UserActionsTypes.SET_CURRENT_USER,
  payload: user
});
