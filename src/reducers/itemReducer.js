import { REQUEST_DATA, REQUEST_SUCCEDED } from '../actions/action-types';

const initialState = {
  isFetching: false,
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_SUCCEDED:
      return {
        ...state,
        isFetching: false,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
