// @flow
import { REQUEST_AUTH, RECEIVE_USER, AUTH_FAILED } from './action-types';

export const requestAuth = () => ({ type: REQUEST_AUTH });
export const receiveUser = user => ({ type: RECEIVE_USER, payload: user });
export const authFailed = () => ({ type: AUTH_FAILED });

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const requestSignIn = user => (dispatch) => {
  dispatch(requestAuth());

  return fetch(`${API_BASE_URL}/fakeAuth`, {
    method: 'post',
    mode: 'no-cors',
    body: user,
  })
    .then(res => res.json)
    .then(json => dispatch(receiveUser(json.user)))
    .catch(err => dispatch(authFailed()));
};

export { requestSignIn };
