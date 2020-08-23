import { IAuthState, IAuthData, IAuthAction, AuthTypes } from "./types";

const INITIAL_STATE: IAuthState = {
  data: {} as IAuthData,
  loading: false,
  error: false,
};

const auth = (state = INITIAL_STATE, action: IAuthAction): IAuthState => {
  switch(action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case AuthTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: {} as IAuthData,
      };
    default:
      return state;
  }
};

export default auth;
