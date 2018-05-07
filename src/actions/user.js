// TODO: Make flow-compliant
import Axios from "axios";
import JWT from "jsonwebtoken";

import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants";

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

const API_LOGIN_URL = process.env.REACT_APP_API_SIGN_IN_URL;

export const requestLogin = formData => (dispatch: Dispatch) => {
  const token = JWT.sign(formData, process.env.REACT_APP_API_JWT_SECRET);
  dispatch(requestToken());

  Axios.post(API_LOGIN_URL, { token })
    .then(response => {
      console.log(response);
      const user = {
        name: "If this shows up somewhere, the reducer is working!"
      };

      dispatch(receiveUser(user));
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
