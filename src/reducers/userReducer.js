import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../constants';

const defaultState = {
  fetchingUser: false,
  authenticated: false,
  user: {},
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        fetchingUser: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        authenticated: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        fetchingUser: false,
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false,
        user: {},
      };
    default:
      return state;
  }
};

export default user;
