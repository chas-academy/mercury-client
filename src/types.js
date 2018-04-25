// @flow

export type ItemT = {
  id: number,
  name: string,
  price: number,
  delimiter: number,
  created: Date,
  updated: Date
};

export type User = {
  id: number,
  name: string
};

export type State = { +value: boolean };
export type Action = { +type: string };

export type GetState = () => State;
export type PromiseAction = Promise<Action>;
export type Dispatch = (action: Action | ThunkAction | PromiseAction) => any;
export type ThunkAction = (dispatch: Dispatch, getState: GetState) => any;
