// @flow
import { REQUESTING_DATA, RECEIVED_DATA } from '../actions/action-types';

const defaultState = {
  isFetching: false,
  allItems: [],
};

const items = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVED_DATA:
      return {
        ...state,
        isFetching: false,
        allItems: action.payload,
      };
    default:
      return state;
  }
};

export default items;
