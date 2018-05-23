import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE
} from '../constants';

const defaultState = {
  fetchingUser: false,
  authenticated: false
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
    case AUTH_START:
      return {
        ...state,
        fetchingUser: true
      };
    case LOGIN_SUCCESS:
    case AUTH_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        authenticated: true,
        data: action.payload,
        userId: action.payload.userId
      };
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        fetchingUser: false
      };
    case LOGOUT_SUCCESS:
    case AUTH_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        authenticated: false,
        data: {},
        userId: null
      };
    case REGISTRATION_START:
    case REGISTRATION_SUCCESS:
    case REGISTRATION_FAILURE:
    default:
      return state;
  }
};

export default user;
