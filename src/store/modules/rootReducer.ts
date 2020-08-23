import { combineReducers } from 'redux';

import auth from './auth';
import { StoreState } from '../createStore';

export default combineReducers<StoreState>({
  auth,
});
