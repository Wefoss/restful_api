import { takeLatest } from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionsType'
import { createUserSaga,  getUsersSaga} from './userSagas'

export function * rootSaga() {
    yield takeLatest(ACTION_TYPES.POST_USER_REQUEST, createUserSaga)
    yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga)
}

export default rootSaga