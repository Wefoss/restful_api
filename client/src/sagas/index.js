import { takeLatest } from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionsType'
import { createUserSaga } from './userSagas'

export function * rootSaga() {
    yield takeLatest(ACTION_TYPES.POST_USER_REQUEST, createUserSaga)
}

export default rootSaga