import { createAction } from "@reduxjs/toolkit";
import ACTION_TYPES from "./actionsType";

export const postUserRequest = createAction(ACTION_TYPES.POST_USER_REQUEST);
export const postUserSuccess = createAction(ACTION_TYPES.POST_USER_SUCCESS);
export const postUserError = createAction(ACTION_TYPES.POST_USER_ERROR);

export const getUserRequest = createAction(ACTION_TYPES.GET_USERS_REQUEST);
export const getUserSuccess = createAction(ACTION_TYPES.GET_USERS_SUCCESS);
export const getUserError = createAction(ACTION_TYPES.GET_USERS_SUCCESS);

export const deleteUserRequest = createAction(ACTION_TYPES.DELETE_USER_REQUEST);
export const deleteUserSuccess = createAction(ACTION_TYPES.DELETE_USER_SUCCESS);
export const deleteUserError = createAction(ACTION_TYPES.DELETE_USER_ERROR);
