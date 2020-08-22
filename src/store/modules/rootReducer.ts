import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  auth: authReducer,
});
