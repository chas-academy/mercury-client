import { REQUEST_ITEMS } from './action-types';

const requestItems = () => ({ type: REQUEST_ITEMS });

/* Actions fetching data from API */
const fetchItems = () => (dispatch) => {
  dispatch(requestItems());
  /* TODO */
};
