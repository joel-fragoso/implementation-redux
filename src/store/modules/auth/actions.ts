import { action } from "typesafe-actions";

interface ISignIn {
  email: string;
  password: string;
}

export function signInRequest({ email, password }: ISignIn) {
  return action('@auth/SIGN_IN_REQUEST', {
    email,
    password,
  });
}
