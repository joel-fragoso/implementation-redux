import { ActionType } from 'typesafe-actions';
import * as Actions from './actions';

export type AuthAction = ActionType<typeof Actions>;

export interface AuthState {
  readonly loadingSignInRequest: boolean;
  readonly isSignedIn: boolean;
}
