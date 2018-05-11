// TODO: Make flow-compliant
import JWT from 'jsonwebtoken';
import Axios from '../auth/axios';
import AxiosCustom from '../auth/axios';
import * as Auth from '../auth/localStorage';
import Notifications from 'react-notification-system-redux';

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

const notification = (title, message) => ({
  title: `${title}`,
  message: `${message}`,
  position: 'tc'
});

export const requestLogin = formData => (dispatch: Dispatch) => {
  if (Auth.isSignedIn()) return;
  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
  dispatch(requestToken());

  Axios.post(API_LOGIN_URL, { token })
    .then(response => {
      const { token } = response.data;
      Auth.storeToken({ token }); /* Set token in local storage using 'store' */
      const decodedUser = Auth.decodeUser();

      dispatch(receiveUser(decodedUser));
      dispatch(
        Notifications.success(
          notification(`Welcome, ${decodedUser.firstName}!`, `Let's get rich!`)
        )
      );
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
  if (!Auth.isSignedIn()) return;
  dispatch(authStart());

  AxiosCustom.get('/verify-token')
    .then(response => {
      const decodedUser = Auth.decodeUser();
      dispatch(authSuccess(decodedUser));
    })
    .catch(error => {
      Auth.deleteToken();
      console.log(error);
      dispatch(authFailure());
    });
};

export const requestLogout = () => (dispatch: Dispatch) => {
  if (!Auth.isSignedIn()) return;
  dispatch(requestTokenLogout());
  AxiosCustom.post('/sign-out')
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
