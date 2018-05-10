// TODO: Make flow-compliant
import JWT from 'jsonwebtoken';
import Axios from '../auth/axios';
import AxiosAuthBearer from '../auth/axios';
import * as Auth from '../auth/localStorage';

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
export const authSuccess = user => ({ type: AUTH_SUCCESS, payload: user });
export const authFailure = () => ({ type: AUTH_FAILURE });

const API_LOGIN_URL = process.env.REACT_APP_API_SIGN_IN_URL;

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

  AxiosAuthBearer.get('/verify-token')
    .then(response => {
      const decodedUser = Auth.decodeUser();
      dispatch(authSuccess(decodedUser));
    })
    .catch(error => {
      Auth.deleteToken();
      console.log(error);
      dispatch(authFailure);
    });
};

export const requestLogout = () => (dispatch: Dispatch) => {
  const token = Auth.getToken();
  dispatch(requestTokenLogout());
  AxiosAuthBearer.post('/sign-out')
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
