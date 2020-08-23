import { applyMiddleware, createStore, Reducer, Middleware } from "redux";

import { IAuthState, IAuthAction } from "./modules/auth/types";

export interface StoreState {
  auth: IAuthState;
}

export type StoreAction = IAuthAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
