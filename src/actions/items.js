// @flow
import Notifications from 'react-notification-system-redux';
import AxiosCustom from '../auth/axios';
import * as Auth from '../auth/localStorage';
import type { Dispatch, GetState } from '../types';
import {
  REQUEST_ITEMS_START,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE
} from '../constants';

/* Redux Action Creators - get/read items */
export const requestItems = () => ({ type: REQUEST_ITEMS_START });
export const receiveItems = (items: Array<Object>) => ({
  type: REQUEST_ITEMS_SUCCESS,
  payload: items
});
export const requestItemsFailure = () => ({ type: REQUEST_ITEMS_FAILURE });

/* Request signed in user's items from API  */
export const fetchItems = () => (dispatch: Dispatch, getState: GetState) => {
  if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === false)
    /* Early return if no user is signed in and update headers accordingly */
    return;
  if (getState().user.authenticated === false)
    return; /* Second fail safe, make sure that user is authenticated before fetching items */
  dispatch(requestItems());

  const userId: Number = Auth.getTokenData('userId');

  AxiosCustom.get(`/users/${userId}/items/`)
    .then(response => {
      dispatch(receiveItems(response.data));
      const notification = {
        title: 'Success!',
        message: 'Successfully fetched items!',
        position: 'tc'
      };
      dispatch(Notifications.success(notification));
    })
    .catch(error => {
      if (error.response && error.response.data.message) {
        dispatch(Notifications.error(error.response.data.message));
        console.error(error.response.data.message);
      } else {
        dispatch(Notifications.error(error));
      }
      dispatch(requestItemsFailure());
    });
};

/* Redux Action Creators - create item */
export const addItem = () => ({ type: ADD_ITEM_START });
export const addItemSuccess = () => ({ type: ADD_ITEM_SUCCESS });
export const addItemFailure = () => ({ type: ADD_ITEM_FAILURE });

/* Post request to API - called from AddItemWizard component */
export const createItem = (item: Object) => (dispatch: Dispatch) => {
  console.log('attempting to add item', item);
  if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === false) return;
  dispatch(addItem());

  const userId = Auth.getTokenData('userId');
  /* copy the item argument and add current user's id */
  const itemWithUserMetaId = Object.assign({ userMetaId: userId }, item);

  AxiosCustom.post(`/items`, itemWithUserMetaId)
    .then(response => {
      dispatch(addItemSuccess());
      console.log(response);
    })
    .catch(error => {
      dispatch(addItemFailure());
      console.error(error);
    });
};
