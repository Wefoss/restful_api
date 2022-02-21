import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "./actionsType";

export const postUserTaskRequest = createAction(ACTION_TYPES.POST_TASK_REQUEST);
export const postUserTaskSuccess = createAction(ACTION_TYPES.POST_TASK_SUCCESS);
export const postUserTaskError = createAction(ACTION_TYPES.POST_TASK_ERROR);

export const getUserTaskRequest = createAction(ACTION_TYPES.GET_TASKS_REQUEST);
export const getUserTaskSuccess = createAction(ACTION_TYPES.GET_TASKS_SUCCESS);
export const getUserTaskError = createAction(ACTION_TYPES.GET_TASKS_ERROR);

export const updateTaskRequest = createAction(ACTION_TYPES.PATCH_TASK_REQUEST);
export const updateTaskSuccess = createAction(ACTION_TYPES.PATCH_TASK_SUCCESS);
export const updateTaskError = createAction(ACTION_TYPES.PATCH_TASK_ERROR);

export const deleteTaskRequest = createAction(ACTION_TYPES.DELETE_TASK_REQUEST);
export const deleteTaskSuccess = createAction(ACTION_TYPES.DELETE_TASK_SUCCESS);
export const deleteTaskError = createAction(ACTION_TYPES.DELETE_TASK_ERROR);
