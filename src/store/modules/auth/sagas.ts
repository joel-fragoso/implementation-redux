import { call, put, all, takeLatest } from 'redux-saga/effects';
import { ActionType } from "typesafe-actions";

import { AuthTypes } from './types';
import * as Actions from './actions';
import api from '../../../services/api';

export function* signIn({ payload }: ActionType<typeof Actions.signInRequest>) {
  try {
    const response = yield call(api.post, '/signin', payload);

    yield put(Actions.signInSuccess(response.data));
  } catch (err) {
    yield put(Actions.signInFailure());
  }
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
]);
