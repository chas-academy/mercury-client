// @flow
import JWT from 'jsonwebtoken';
import AxiosCustom from '../auth/axios';
import * as Auth from '../auth/localStorage';
import Notifications from 'react-notification-system-redux';
import type { Dispatch, Action } from '../types';
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

const notification = (title, message) => ({
  title: `${title}`,
  message: `${message}`,
  position: 'tc'
});
export const requestTokenLogout = () => ({ type: LOGOUT_START });
export const removeUser = () => ({ type: LOGOUT_SUCCESS });
export const requestFailureLogout = () => ({ type: LOGOUT_FAILURE });
export const authStart = () => ({ type: AUTH_START });
export const authSuccess = user => ({ type: AUTH_SUCCESS, payload: user });
export const authFailure = () => ({ type: AUTH_FAILURE });

const API_LOGIN_URL = process.env.REACT_APP_API_SIGN_IN_URL;

export const requestLogin = formData => (dispatch: Dispatch) => {
  if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === true) return;

  dispatch(requestToken());

  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);

  AxiosCustom.post(process.env.REACT_APP_API_SIGN_IN_URL, { token })
    .then(response => {
      const { token } = response.data;
      Auth.storeDataInLocalStorage({
        token
      }); /* Set token in local storage using 'store' dependency */
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

/* Redux Action Creators - authorize user  */
export const authStart = () => ({ type: AUTH_START });
export const authSuccess = user => ({ type: AUTH_SUCCESS, payload: user });
export const authFailure = () => ({ type: AUTH_FAILURE });

/* Get request to API */
export const authorizeToken = () => (dispatch: Dispatch) => {
  if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === false) return;
  dispatch(authStart());

  AxiosCustom.get(process.env.REACT_APP_API_VERIFY_TOKEN_URL)
    .then(response => {
      const decodedUser = Auth.decodeUser();
      dispatch(authSuccess(decodedUser));
      dispatch(
        Notifications.success(
          notification(
            `Successfully authed, ${decodedUser.firstName}!`,
            `Let's continue`
          )
        )
      );
    })
    .catch(error => {
      Auth.deleteToken();
      console.log(error);
      dispatch(authFailure());
    });
};

/* Redux Action Creators - logout user */
export const requestTokenLogout = () => ({ type: LOGOUT_START });
export const removeUser = () => ({ type: LOGOUT_SUCCESS });
export const requestFailureLogout = () => ({ type: LOGOUT_FAILURE });

/* Post request to API - initiate actions using the action creators above */
export const requestLogout = () => (dispatch: Dispatch) => {
  if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === false) return;
  dispatch(requestTokenLogout());

  AxiosCustom.post(process.env.REACT_APP_API_SIGN_OUT_URL)
    .then(response => {
      dispatch(removeUser()) && Auth.deleteToken('token');
      dispatch(
        Notifications.success(notification(`Bye`, `Now you're logged out`))
      );
    })
    .catch(error => {
      if (error.response && error.response.data.message) {
        console.error(error.response.data.message);
      } else {
        console.error(error);
      }
      dispatch(requestFailureLogout());
    });
};
