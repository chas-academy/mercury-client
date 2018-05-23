// @flow
import JWT from 'jsonwebtoken';
import AxiosCustom from '../auth/axios';
import * as Auth from '../auth/localStorage';
import Notifications from 'react-notification-system-redux';
import type { Dispatch } from '../types';
import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILURE,
  REGISTRATION_START,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE
} from '../constants';

const composeNotification = (title, message) => ({
  title: `${title}`,
  message: `${message}`,
  position: 'tc'
});

/* Redux Action Creators - login user */
export const requestToken = () => ({ type: LOGIN_START });
export const receiveUser = user => ({ type: LOGIN_SUCCESS, payload: user });
export const requestFailure = () => ({ type: LOGIN_FAILURE });

/* Post request to API without Bearer token  - initiate login actions using the action creators above */
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
      const decodedUser = Auth.decodeToken();
      dispatch(receiveUser(decodedUser));
      dispatch(
        Notifications.success(
          composeNotification(
            `Welcome, ${decodedUser.firstName}!`,
            `Let's get rich!`
          )
        )
      );
    })
    .catch(error => {
      if (error.response.data.message)
        console.error(error.response.data.message);
      dispatch(requestFailure());
      dispatch(
        Notifications.warning(
          composeNotification(
            'Försök igen!',
            'Verkar som att du skrev in fel e-post eller lösenord. Eller så är båda fel.'
          )
        )
      );
      console.error(error);
    });
};

/* Redux Action Creators - authorize user  */
export const authStart = () => ({ type: AUTH_START });
export const authSuccess = user => ({ type: AUTH_SUCCESS, payload: user });
export const authFailure = () => ({ type: AUTH_FAILURE });

/* Get request to API - initiate auth actions using the action creators above */
export const authorizeToken = () => (dispatch: Dispatch) => {
  if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === false) return;
  dispatch(authStart());
  AxiosCustom.get(process.env.REACT_APP_API_VERIFY_TOKEN_URL)
    .then(response => {
      const decodedUser = Auth.decodeToken();
      dispatch(authSuccess(decodedUser));
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

/* Post request to API - initiate logout actions using the action creators above */
export const requestLogout = () => (dispatch: Dispatch) => {
  /* if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === false) return; */
  dispatch(requestTokenLogout());

  AxiosCustom.post(process.env.REACT_APP_API_SIGN_OUT_URL)
    .then(response => {
      dispatch(removeUser()) && Auth.deleteToken('token');
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

/* Redux Action Creators - register user */
export const requestRegistration = () => ({ type: REGISTRATION_START });
export const completeRegistration = () => ({ type: REGISTRATION_SUCCESS });
export const failRegistration = () => ({ type: REGISTRATION_FAILURE });

export const registerUser = formData => (dispatch: Dispatch) => {
  // if (Auth.checkIfUserIsSignedInAndUpdateAxiosHeaders() === true) return;
  console.log(formData);

  dispatch(requestRegistration());

  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);

  AxiosCustom.post(process.env.REACT_APP_API_USERS_URL, {token})
    .then(response => {
      console.log(response);
      dispatch(completeRegistration());      
    })
    .catch(error => {
      console.error(error);
      dispatch(failRegistration());
    })
}
