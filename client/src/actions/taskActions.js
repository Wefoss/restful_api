import ACTION_TYPES from "./actionsType";


export const postUserTaskRequest = ({values, currentId}) => ({
    type: ACTION_TYPES.POST_TASK_REQUEST,
    payload: {values, currentId}
})

export const postUserTaskSuccess = ({task}) => ({
    type: ACTION_TYPES.POST_TASK_SUCCESS,
    payload: {task}
})

export const postUserTaskError = ({error}) => ({
    type: ACTION_TYPES.POST_TASK_ERROR,
    payload: {error}
})


export const getUserTaskRequest = () => ({
    type: ACTION_TYPES.GET_TASK_REQUEST,
   
})

export const getUserTaskSuccess = ({task}) => ({
    type: ACTION_TYPES.GET_TASK_SUCCESS,
    payload: {task}
})

export const getUserTaskError = ({error}) => ({
    type: ACTION_TYPES.GET_TASK_ERROR,
    payload: {error}
})