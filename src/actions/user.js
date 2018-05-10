// TODO: Make flow-compliant
import JWT from 'jsonwebtoken';
import * as Auth from '../auth/localStorage';
import Axios from '../auth/axios';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE
} from '../constants';

export const requestToken = () => ({ type: LOGIN_START });
export const receiveUser = user => ({ type: LOGIN_SUCCESS, payload: user });
export const requestFailure = () => ({ type: LOGIN_FAILURE });
export const requestTokenLogout = () => ({ type: LOGOUT_START });
export const removeUser = () => ({ type: LOGOUT_SUCCESS });
export const requestFailureLogout = () => ({ type: LOGOUT_FAILURE });
export const authStart = () => ({ type: AUTH_START });
export const authSuccess = () => ({ type: AUTH_SUCCESS });
export const authFailure = () => ({ type: AUTH_FAILURE });

const API_LOGIN_URL = process.env.REACT_APP_API_SIGN_IN_URL;
const API_LOGOUT_URL = process.env.REACT_APP_API_SIGN_OUT_URL;
const API_VERIFY_TOKEN_URL = process.env.REACT_APP_API_VERIFY_TOKEN_URL;

export const requestLogin = formData => (dispatch: Dispatch) => {
  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
  dispatch(requestToken());

  Axios.post(API_LOGIN_URL, { token })
    .then(response => {
      const { token } = response.data;
      Auth.storeToken({ token }); /* Set token in local storage using 'store' */
      const decodedUser = Auth.decodeUser();
      // console.log(decodedUser);

      dispatch(receiveUser(decodedUser));
    })
    .catch(error => {
      if (error.response && error.response.data.message) {
        console.error(error.response.data.message);
      } else {
        console.error(error);
      }
      dispatch(requestFailure());
    });
};

export const authorizeToken = () => (dispatch: Dispatch) => {
  dispatch(authStart());

  if (!Auth.getToken()) return dispatch(authFailure());

  const token = Auth.getToken();
  //const data = Auth.getTokenData('userId');
  //console.log(data);
  Axios({
    method: 'get',
    url: `${API_VERIFY_TOKEN_URL}`,
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      dispatch(authSuccess());
      const decodedUser = Auth.decodeUser();
      dispatch(receiveUser(decodedUser));
    })
    .catch(error => {
      Auth.deleteToken();
      // console.log(error);
      dispatch(authFailure);
    });
};

export const requestLogout = () => (dispatch: Dispatch) => {
  const token = Auth.getToken();
  dispatch(requestTokenLogout());
  Axios({
    method: 'post',
    url: `${API_LOGOUT_URL}`,
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(
      response =>
        dispatch(removeUser(response.data)) && Auth.deleteToken('token')
    )
    .catch(error => {
      if (error.response && error.response.data.message) {
        console.error(error.response.data.message);
      } else {
        console.error(error);
      }
      dispatch(requestFailureLogout());
    });
};
