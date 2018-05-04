import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
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
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        fetchingUser: false,
      };
    default:
      return state;
  }
};

export default user;
