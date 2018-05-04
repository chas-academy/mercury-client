import Axios from 'axios';
import JWT from 'jsonwebtoken';

import { REQUESTING_AUTH, RECEIVED_USER, AUTH_FAILED } from './action-types';

export const requestAuth = () => ({ type: REQUESTING_AUTH });
export const receiveUser = user => ({ type: RECEIVED_USER, payload: user });
export const authFailed = () => ({ type: AUTH_FAILED });

const API_LOGIN_URL = process.env.REACT_APP_API_SIGN_IN_URL;

export const requestLogin = (formData) => {
  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
  Axios.post(API_LOGIN_URL, { token })
    .then((response) => {
      console.log(response);
    });
};
