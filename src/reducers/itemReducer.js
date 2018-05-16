// @flow
import {
  REQUEST_ITEMS_START,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  ADD_ITEM_RESET,
  INCREMENT_USAGE_START,
  INCREMENT_USAGE_SUCCESS,
  INCREMENT_USAGE_FAILURE,
} from '../constants';

const defaultState = {
  isFetching: false,
  allItems: [],
  requestFullfilled: false,
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
    case REQUEST_ITEMS_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case ADD_ITEM_START:
      return {
        ...state,
        isFetching: true,
        requestFullfilled: false,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        requestFullfilled: true,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        requestFullfilled: false,
      };
    case ADD_ITEM_RESET:
      return {
        ...state,
        isFetching: false,
        requestFullfilled: false,
      };
    case INCREMENT_USAGE_START:
      return {
        ...state,
        isFetching: false,
        requestFullfilled: false,
      };
    case INCREMENT_USAGE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        requestFullfilled: true,
      };
    case INCREMENT_USAGE_FAILURE:
      return {
        ...state,
        isFetching: false,
        requestFullfilled: false,
      };
    default:
      return state;
  }
};

export default items;
