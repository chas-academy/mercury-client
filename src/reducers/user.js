import {
  REQUEST_AUTH,
  RECEIVE_USER,
  AUTH_FAILED,
} from '../actions/action-types';

const initialState = {
  isAuthenticated: false,
  isFetching: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_AUTH:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_USER:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
      };
    case AUTH_FAILED:
      /* TODO */
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default user;
