import { takeLatest } from 'redux-saga/effects'
import ACTION_TYPES from '../actions/actionsType'
import { createUserSaga,  getUsersSaga} from './userSagas'
import { getTasksSaga, createTaskSaga, updateTaskSaga } from './taskSagas'

export function * rootSaga() {
    yield takeLatest(ACTION_TYPES.POST_USER_REQUEST, createUserSaga)
    yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getUsersSaga)

    yield takeLatest(ACTION_TYPES.POST_TASK_REQUEST, createTaskSaga)
    yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST, getTasksSaga)
    yield takeLatest(ACTION_TYPES.PATCH_TASK_REQUEST, updateTaskSaga)
}

export default rootSaga