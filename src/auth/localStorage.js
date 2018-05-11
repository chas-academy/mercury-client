import Store from 'store';
import JWT from 'jsonwebtoken';
import AxiosCustom from './axios';

export const isSignedIn = () => {
  getToken()
    ? (AxiosCustom.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${getToken()}`)
    : delete AxiosCustom.defaults.headers.common['Authorization'];
  return !!getToken();
};

export const storeToken = data => {
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

export const decodeUser = () =>
  decodeToken(getToken(), process.env.REACT_APP_API_JWT_SECRET);
