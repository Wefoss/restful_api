import { put } from 'redux-saga/effects'
import * as userActions from '../actions/userActions'
import * as API from '../api/index'

export function * createUserSaga(action) {
  try {
       const {data:{data:[user]}} = yield API.createUser(action.payload.values)
       yield put(userActions.postUserSuccess({user}))
  } catch (error) {
    yield put(userActions.postUserError({error}))
  }
}

export function * getUsersSaga(action) {
  try {
       const {data:{data: users}} = yield API.getUsers(action.payload)
       yield put(userActions.getUserSuccess({users}))
  } catch (error) {
    yield put(userActions.getUserError({error}))
  }
}



