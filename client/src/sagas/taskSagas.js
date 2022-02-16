import { put } from 'redux-saga/effects'
import * as taskActions from '../actions/taskActions'
import * as API from '../api/index'


export function * createTaskSaga(action) {
    try {
       
         const {data:{data:[task]}} = yield API.createTask(action.payload)
         yield put(taskActions.postUserTaskSuccess({task}))
    } catch (error) {
      yield put(taskActions.postUserTaskError({error}))
    }
  }
  
  
  export function * getTasksSaga(action) {
    try {
         const {data:{data: task}} = yield API.getUserTask()
         yield put(taskActions.getUserTaskSuccess({task}))
    } catch (error) {
      yield put(taskActions.getUserTaskError({error}))
    }
  }