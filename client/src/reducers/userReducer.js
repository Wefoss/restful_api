import { createAction, createReducer } from "@reduxjs/toolkit";
import ACTION_TYPES from "../actions/actionsType";

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

const errorHandler = (state, action) => {
  const {
    payload: { error },
  } = action;
  state.isFetching = false;
  state.error = error;
};

const requestHandler = (state, action) => {
  state.isFetching = true;
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ACTION_TYPES.GET_USERS_REQUEST, requestHandler)
    .addCase(ACTION_TYPES.POST_USER_REQUEST, requestHandler)
    .addCase(ACTION_TYPES.DELETE_USER_REQUEST, requestHandler)

    .addCase(ACTION_TYPES.GET_USERS_SUCCESS, (state, action) => {
      const {payload: { users } } = action;
      state.isFetching = false;
      state.users = [...state.users, ...users];
    })
    .addCase(ACTION_TYPES.POST_USER_SUCCESS, (state, action) => {
      const {payload: { user } } = action;
      state.isFetching = false;
      state.users.push(user);
    })
    .addCase(ACTION_TYPES.DELETE_USER_SUCCESS, (state, action) => {
      const {payload: { user } } = action;
      state.users = [...state.users].filter((el) => el.id !== user.id);
      state.isFetching = false;
    })
    .addCase(ACTION_TYPES.GET_USERS_ERROR, errorHandler)
    .addCase(ACTION_TYPES.POST_USER_ERROR, errorHandler)
    .addCase(ACTION_TYPES.DELETE_USER_ERROR, errorHandler);
});

export default userReducer;
