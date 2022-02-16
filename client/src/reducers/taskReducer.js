import ACTION_TYPES from "../actions/actionsType";

const initialState = {
    tasks: [],
    isFetching: false,
    error: null
}

function taskReducer (state = initialState, action){
  switch (action.type) {
      case ACTION_TYPES.POST_TASK_REQUEST: {
          return {
              ...state,
              isFetching: true,
              error: null
          }
      }
      case ACTION_TYPES.POST_TASK_SUCCESS: {
          const {payload: {task}} = action
        return {
            ...state,
            isFetching: true,
            tasks: [...state.tasks, task]
        }
    }
    case ACTION_TYPES.POST_TASK_ERROR: {
        const {payload: {error}} = action
      return {
          ...state,
          isFetching: true,
          error
      }
  }
          
      default: return state
       
  }
}

export default taskReducer