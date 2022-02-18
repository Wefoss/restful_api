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
    type: ACTION_TYPES.GET_TASKS_REQUEST,
   
})

export const getUserTaskSuccess = ({tasks}) => ({
    type: ACTION_TYPES.GET_TASKS_SUCCESS,
    payload: {tasks}
})

export const getUserTaskError = ({error}) => ({
    type: ACTION_TYPES.GET_TASKS_ERROR,
    payload: {error}
})


export const updateTaskRequest = ({values, taskId}) => ({
    type: ACTION_TYPES.PATCH_TASK_REQUEST,
    payload: {values, taskId}
})

export const updateTaskSuccess = ({task}) => ({
    type: ACTION_TYPES.PATCH_TASK_SUCCESS,
    payload: {task}
})

export const updateTaskError = ({error}) => ({
    type: ACTION_TYPES.PATCH_TASK_ERROR,
    payload: {error}
})


export const deleteTaskRequest = ({taskId}) => ({
    type: ACTION_TYPES.DELETE_TASK_REQUEST,
    payload: {taskId}
})

export const deleteTaskSuccess = ({task}) => ({
    type: ACTION_TYPES.DELETE_TASK_SUCCESS,
    payload: {task}
})

export const deleteTaskError = ({error}) => ({
    type: ACTION_TYPES.DELETE_TASK_ERROR,
    payload: {error}
})

