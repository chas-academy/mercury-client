// TODO: Make flow-compliant
import Axios from 'axios';
import JWT from 'jsonwebtoken';
import Store from 'store';

import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE
} from '../constants';

export const requestToken = () => ({
  type: LOGIN_START
});

export const receiveUser = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

export const requestFailure = () => ({
  type: LOGIN_FAILURE
});

export const requestTokenLogout = () => ({
  type: LOGOUT_START
});

export const removeUser = () => ({
  type: LOGOUT_SUCCESS
});

export const requestFailureLogout = () => ({
  type: LOGOUT_FAILURE
});

const API_LOGIN_URL = process.env.REACT_APP_API_SIGN_IN_URL;
const API_LOGOUT_URL = process.env.REACT_APP_API_SIGN_OUT_URL;

export const requestLogin = formData => (dispatch: Dispatch) => {
  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
  dispatch(requestToken());

  Axios.post(API_LOGIN_URL, { token })
    .then(response => {
      const { token } = response.data;
      storeToken({ token }); /* Set token in local storage using 'store' */

      const decodedToken = JWT.decode(
        response.data.token,
        process.env.REACT_APP_API_JWT_SECRET
      );

      dispatch(receiveUser(decodedToken));
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

export const requestLogout = () => (dispatch: Dispatch) => {
  const token = getToken();
  dispatch(requestTokenLogout());
  Axios({
    method: 'post',
    url: `${API_LOGOUT_URL}`,
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(
      response => dispatch(removeUser(response.data)) && deleteToken('token')
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

/*** Manage token in local storage ***/
export const storeToken = data => {
  for (const key in data) {
    Store.set(key, data[key]);
  }
};

export const getToken = () => Store.get('token');

export const deleteToken = () => Store.remove('token');

export function decodeToken() {
  if (getToken()) {
    return JWT.verify(
      getToken(),
      process.env.REACT_APP_API_JWT_SECRET,
      function(errors, decoded) {
        if (errors) {
          deleteToken();
          return false;
        }

        return decoded;
      }
    );
  }
}

export function getTokenData(data) {
  return decodeToken() && decodeToken()[data] ? decodeToken()[data] : null;
}
