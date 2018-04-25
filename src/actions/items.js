// @flow
import { REQUEST_DATA, REQUEST_SUCCEDED } from "./action-types";
import type { Dispatch, GetState } from "../types";

const API_BASE_URL: string = process.env.REACT_APP_MOCK;

/* Action creators */
const requestData = () => ({ type: REQUEST_DATA });
const recieveData = (data: Array<Object>) => ({
  type: REQUEST_SUCCEDED,
  payload: data
});

/* Thunky action creators - fetching data from API */
export const fetchData = (query: string) => (dispatch: Dispatch) => {
  dispatch(requestData());
  fetch(`${API_BASE_URL}/${query}`)
    .then(res => res.json())
    .then(json => dispatch(recieveData(json)))
    .catch(error =>
      console.log(
        "An error occured while trying to fetch items from the server",
        error
      )
    );
};

export default fetchData;
