import {
  REQUESTING_AUTH,
  RECEIVED_USER,
  AUTH_FAILED,
} from '../actions/action-types';

const defaultState = {
  verifyingUser: false,
  signedInUser: null,
};

const user = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_AUTH:
      return {
        ...state,
        verifyingUser: true,
      };
    case RECEIVED_USER:
      return {
        ...state,
        verifyingUser: false,
        signedInUser: action.payload,
      };
    case AUTH_FAILED:
      return {
        ...state,
        verifyingUser: false,
      };
    default:
      return state;
  }
};

export default user;
