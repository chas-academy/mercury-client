import Store from 'store';
import JWT from 'jsonwebtoken';

export const storeToken = (data) => {
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
        // console.log(decodedToken);
        return decodedToken;
      },
    );
  }
}

export const getTokenData = data =>
  (decodeToken() && decodeToken()[data] ? decodeToken()[data] : null);

export const decodeUser = () =>
  decodeToken(getToken(), process.env.REACT_APP_API_JWT_SECRET);

/* 1a This function is invoked by the subscriber function in `Root.js` */
/*    It recieves the current state tree and assign savedState */
/*    a stringified JSON version of the state as its value */

/* 1b Then, the key 'state' in local sotrage is updated with savedState */

/* 2a If key 'state' in local storage doesn't exist and */
/*    savedState will be null --> then it will return undefined */
/*    and that will let the other reducers know that they should */
/*    implement their own default states - thnx, genius Dan Abramov! */
/*    return undefined so that the item and user reducer knows  */

/* 2b If key 'state' exists, the value of savedState will be */
/*    the stringified version of state saved previously by */

export const saveStateToLocalStorage = (state) => {
  try {
    const savedState = JSON.stringify(state); // 1a
    Store.set('state', savedState); // 1b
  } catch (error) {
    return undefined;
  }
};

export const loadStateFromLocalStorage = () => {
  try {
    const savedState = Store.get('state');
    if (savedState === null) {
      return undefined; // 2a
    }
    return JSON.parse(savedState); // 2b
  } catch (error) {
    return undefined;
  }
};
