import Store from 'store';
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
