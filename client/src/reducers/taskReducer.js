import { createReducer } from "@reduxjs/toolkit";
import ACTION_TYPES from "../actions/actionsType";

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
};

const requestHandler = (state, action) => {
  state.isFetching = true;
};

const errorHandler = (state, action) => {
  const {
    payload: { error },
  } = action;
  state.isFetching = false;
  state.error = error;
};

const taskReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ACTION_TYPES.POST_TASK_REQUEST, requestHandler)
    .addCase(ACTION_TYPES.GET_TASKS_REQUEST, requestHandler)
    .addCase(ACTION_TYPES.PATCH_TASK_REQUEST, requestHandler)
    .addCase(ACTION_TYPES.DELETE_TASK_REQUEST, requestHandler)

    .addCase(ACTION_TYPES.POST_TASK_SUCCESS, (state, action) => {
      const {payload: { task } } = action;
      state.isFetching = false;
      state.tasks.push(task);
    })
    .addCase(ACTION_TYPES.GET_TASKS_SUCCESS, (state, action) => {
      const {payload: { tasks }} = action;
      state.isFetching = false;
      state.tasks = [...state.tasks, ...tasks];
    })
    .addCase(ACTION_TYPES.PATCH_TASK_SUCCESS, (state, action) => {
      const {payload: { task } } = action;
      state.isFetching = false;
      state.tasks = [...state.tasks].map((el) =>
        el.id === task.id ? { ...el, isDone: task.isDone } : el
      );
    })
    .addCase(ACTION_TYPES.DELETE_TASK_SUCCESS, (state, action) => {
      const {payload: { task } } = action;
      state.isFetching = false;
      state.tasks = [...state.tasks].filter((el) => el.id !== task.id);
    })

    .addCase(ACTION_TYPES.POST_TASK_ERROR, errorHandler)
    .addCase(ACTION_TYPES.GET_TASKS_ERROR, errorHandler)
    .addCase(ACTION_TYPES.PATCH_TASK_ERROR, errorHandler)
    .addCase(ACTION_TYPES.DELETE_TASK_ERROR, errorHandler);
});

export default taskReducer;
