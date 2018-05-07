// @flow

export type CanonicalItemT = {
  name: string,
  id: number,
  icon: string
};

export type ItemT = {
  itemId: number,
  CanonicalItem: Object,
  price: number,
  goal: number,
  delimiter: number,
  createdAt: Date,
  updatedAt: Date,
  auto: boolean,
  completed: boolean,
  CanonicalItem: CanonicalItemT
};

/* TODO: Update types */
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
