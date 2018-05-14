import Store from 'store';
import JWT from 'jsonwebtoken';
import AxiosCustom from './axios';

export const checkIfUserIsSignedInAndUpdateAxiosHeaders = () => {
  console.log(AxiosCustom.defaults.headers.common);
  getToken() /* If a token is found in local storage, */
    ? (AxiosCustom.defaults.headers.common[
        'Authorization' /* AxiosCustom's headers gets updated with the current token as Bearer token. */
      ] = `Bearer ${getToken()}`)
    : delete AxiosCustom.defaults.headers.common[
        'Authorization'
      ]; /* Otherwise, the default header config gets deleted */
  console.log(AxiosCustom.defaults.headers.common);
  // console.log(Boolean(getToken()));
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
  const token = getToken();
  if (token) {
    return JWT.verify(
      token,
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

export const getTokenData = data =>
  decodeToken() && decodeToken()[data] ? decodeToken()[data] : null;

/* weird function that's not needed */
export const decodeUser = () =>
  decodeToken(getToken(), process.env.REACT_APP_API_JWT_SECRET);
