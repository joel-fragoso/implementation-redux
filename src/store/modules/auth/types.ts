import { ActionType } from 'typesafe-actions';

import * as Actions from './actions';

export enum AuthTypes {
  SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS',
  SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE',
}

export interface IUser {
  email: string;
  password: string;
}

export interface IAuthData {
  user: IUser;
  token: string;
}

export type IAuthAction = ActionType<typeof Actions>;

export interface IAuthState {
  readonly data: IAuthData;
  readonly loading: boolean;
  readonly error: boolean;
}
