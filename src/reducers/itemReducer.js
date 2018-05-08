// @flow
import {
  REQUEST_ITEMS_START,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE,
} from '../constants';

const defaultState = {
  isFetching: false,
  allItems: [],
};

const items = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ITEMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case REQUEST_ITEMS_SUCCESS:
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
