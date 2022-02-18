import ACTION_TYPES from '../actions/actionsType'

const initialState = {
  tasks: [],
  isFetching: false,
  error: null,
  }

function taskReducer (state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.POST_TASK_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: null
      }
    }
    case ACTION_TYPES.POST_TASK_SUCCESS: {
      const {
        payload: { task }} = action
      return {
        ...state,
        isFetching: false,
        tasks: [...state.tasks, task]
      }
    }
    case ACTION_TYPES.POST_TASK_ERROR: {
      const {
        payload: { error }
      } = action
      return {
        ...state,
        isFetching: false,
        error
      }
    }

    case ACTION_TYPES.GET_TASKS_REQUEST: {
      return {
        ...state,
        isFetching: true
      }
    }

    case ACTION_TYPES.GET_TASKS_SUCCESS: {
      const {payload: { tasks }} = action
      return {
        ...state,
        isFetching: false,
        tasks: [...state.tasks, ...tasks]
      }
    }

    case ACTION_TYPES.GET_TASKS_ERROR: {
        const {payload: { error }} = action
        return {
          ...state,
          isFetching: false,
          error
        }
      }



      case ACTION_TYPES.PATCH_TASK_REQUEST: {
        return {
          ...state,
          isFetching: true,
          error: null
        }
      }
  
      case ACTION_TYPES.PATCH_TASK_SUCCESS: {
        const {payload:  {task} } = action
        return {
          ...state,
          isFetching: false,
          tasks: [...state.tasks].map(el => el.id === task.id ? {...el, isDone: task.isDone} : el),
            }
      }
  
      case ACTION_TYPES.PATCH_TASK_ERROR: {
          const {payload: { error }} = action
          return {
            ...state,
            isFetching: false,
            error
          }
        }


        case ACTION_TYPES.DELETE_TASK_REQUEST: {
          return {
            ...state,
            isFetching: true,
            error: null
          }
        }
    
        case ACTION_TYPES.DELETE_TASK_SUCCESS: {
          const {payload: {task} } = action
          return {
            ...state,
            isFetching: false,
            tasks: [...state.tasks].filter(el => el.id !== task.id),
            }
        }
    
        case ACTION_TYPES.DELETE_TASK_ERROR: {
            const {payload: { error }} = action
            return {
              ...state,
              isFetching: false,
              error
            }
          }

    default:
      return state
  }
}

export default taskReducer
