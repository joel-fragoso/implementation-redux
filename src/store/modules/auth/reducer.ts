import { AuthState, AuthAction } from "./types";

const INITIAL_STATE: AuthState = {
  loadingSignInRequest: false,
  isSignedIn: false,
};

const auth = (state = INITIAL_STATE, action: AuthAction): AuthState => {
  switch(action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loadingSignInRequest: true,
      };
    default:
      return state;
  }
};

export default auth;
