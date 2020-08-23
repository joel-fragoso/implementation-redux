import { action } from "typesafe-actions";

import { IUser, AuthTypes, IAuthData } from "./types";

export function signInRequest({ email, password }: IUser) {
  return action(AuthTypes.SIGN_IN_REQUEST, {
    email,
    password,
  });
}

export function signInSuccess(data: IAuthData) {
  return action(AuthTypes.SIGN_IN_SUCCESS, {
    data,
  });
}

export function signInFailure() {
  return action(AuthTypes.SIGN_IN_FAILURE);
}
