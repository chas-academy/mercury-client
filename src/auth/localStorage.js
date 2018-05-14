import Store from 'store';
import JWT from 'jsonwebtoken';
import AxiosCustom from './axios';

export const checkIfUserIsSignedInAndUpdateAxiosHeaders = () => {
  getToken() /* If a token is found in local storage, */
    ? (AxiosCustom.defaults.headers.common[
        'Authorization' /* AxiosCustom's headers gets updated with the current token as Bearer token. */
      ] = `Bearer ${getToken()}`)
    : delete AxiosCustom.defaults.headers.common[
        'Authorization'
      ]; /* Otherwise, the default header config gets deleted */
  return Boolean(
    /* returns true if a token is found, which indicates that an user is signed in */
    getToken() /* otherwise, it returns false */
  );
};

export const storeDataInLocalStorage = data => {
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
      (errors, decodedToken) => {
        if (errors) {
          deleteToken();
          return false;
        }
        return decodedToken;
      }
    );
  }
}

let verifyTokenTimeOut = 0;

export const verifyToken = () => {
  if (!decodeToken()) {
    return window.location.reload();
    /* if the return of decodeToken is false, then reload the window */
  } else {
    return (
      clearTimeout(verifyTokenTimeOut),
      (verifyTokenTimeOut = setTimeout(function() {
        AxiosCustom.get(process.env.REACT_APP_API_VERIFY_TOKEN_URL).catch(
          error => {
            deleteToken();
            window.location.reload();
          }
        );
      }, 1000))
    );
  }
};

export const getTokenData = data =>
  decodeToken() && decodeToken()[data] ? decodeToken()[data] : null;
