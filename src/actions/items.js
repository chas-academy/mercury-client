// @flow
import Axios from 'axios';
import Notifications from 'react-notification-system-redux';

import {
  REQUEST_ITEMS_START,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE
} from '../constants';

import type { Dispatch } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const requestItems = () => ({
  type: REQUEST_ITEMS_START
});

export const receiveItems = items => ({
  type: REQUEST_ITEMS_SUCCESS,
  payload: items
});

export const requestItemsFailure = () => ({
  type: REQUEST_ITEMS_FAILURE
});

export const fetchItems = (query: string) => (dispatch: Dispatch) => {
  dispatch(requestItems());
  // Temporary userId for testing purposes
  // should be replaced by the id of the current logged in user
  const userId = 1;

  Axios.get(`${API_BASE_URL}/users/${userId}/${query}`)
    .then(response => {
      dispatch(receiveItems(response.data.data));
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

export const addItem = () => ({
  type: ADD_ITEM_START
});

export const addItemSuccess = () => ({
  type: ADD_ITEM_SUCCESS
});

export const addItemFailure = () => ({
  type: ADD_ITEM_FAILURE
});

export const createItem = (item: object) => (dispatch: Dispatch) => {
  console.log('attempting to add item', item);
  dispatch(addItem());
  Axios.post(`${API_BASE_URL}/items`, item)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
};
