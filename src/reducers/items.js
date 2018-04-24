import { REQUEST_ITEMS } from '../actions/action-types';

const initialState = {
  items: [], // TODO: change name, weird with an items reducer that contains an items key (?)
  isFetching: false,
};

const items = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ITEMS:
      return {
        ...state,
        isFetching: true, // TODO: create action
      };
    default:
      return state;
  }
};

export default items;
