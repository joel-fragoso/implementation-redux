import { applyMiddleware, createStore, Reducer, Middleware } from "redux";

import { AuthState, AuthAction } from "./modules/auth/types";

export interface StoreState {
  auth: AuthState;
}

export type StoreAction = AuthAction;

export default (reducers: Reducer<StoreState, StoreAction>, middlewares: Middleware[]) => {
  const enhancer = applyMiddleware(...middlewares);

  return createStore(reducers, enhancer);
};
