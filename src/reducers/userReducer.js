import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants';

const defaultState = {
  fetchingUser: false,
  authenticated: false,
  data: {}
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
      return {
        ...state,
        fetchingUser: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        authenticated: true,
        data: action.payload
      };
    case LOGIN_FAILURE:
    case LOGOUT_FAILURE:
      return {
        ...state,
        fetchingUser: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        authenticated: false,
        data: {}
      };
    default:
      return state;
  }
};

export default user;
