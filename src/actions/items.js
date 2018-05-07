// @flow
import Axios from 'axios';

import {
  REQUEST_ITEMS_START,
  REQUEST_ITEMS_SUCCESS,
  REQUEST_ITEMS_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
} from '../constants';

import type { Dispatch } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const requestItems = () => ({
  type: REQUEST_ITEMS_START
});

export const receiveItems = (items) => ({
  type: REQUEST_ITEMS_SUCCESS,
  payload: items,
});

// Temporary userId for testing purposes
// should be replaced by the id of the current logged in user
const userId = 1;

export const fetchData = (query: string) => (dispatch: Dispatch) => {
  dispatch(requestItems());
  fetch(`${API_BASE_URL}/users/1/${query}`)
    .then(res => res.json())
    .then(json => dispatch(receiveItems(json.data)))
    .catch(error =>
      console.log(
        "An error occured while trying to fetch items from the server",
        error
      )
    );
};

export const createItem = (query: object) => (dispatch: Dispatch) => {
  Axios.post
}