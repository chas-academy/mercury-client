// @flow
import {
  REQUESTING_DATA,
  REQUEST_SUCCEDED,
  RECEIVED_DATA
} from "./action-types";
import type { Dispatch } from "../types";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/* Action creators */
const requestData = () => ({ type: REQUESTING_DATA });
const recieveData = (items: Array<Object>) => ({
  type: RECEIVED_DATA,
  payload: items
});

export const fetchData = (query: string) => (dispatch: Dispatch) => {
  dispatch(requestData());
  fetch(`${API_BASE_URL}/users/1/${query}`)
    .then(res => res.json())
    .then(json => dispatch(recieveData(json.data)))
    .catch(error =>
      console.log(
        "An error occured while trying to fetch items from the server",
        error
      )
    );
};
