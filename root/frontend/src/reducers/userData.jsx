import {
  USER_LOGIN,
  USER_LOGOUT,
} from '../actions/authentication';

const INITIAL_STATE = {
  userData: {},
}

const userData = (state = INITIAL_STATE, action) => {
  const { type, newUserData } = action;

  switch (type) {
    case USER_LOGIN:
      return {
        ...state,
        userData: newUserData,
      };
    case USER_LOGOUT:
      return {
        ...state,
        userData: {},
      }
    default: 
      return state;
  }
}

export default userData;