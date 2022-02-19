import ACTION_TYPES from "../actions/actionsType";

const initialState = {
    users: [],
    isFetching: false,
    error: null,
    test: []
}

function userReducer(state=initialState, action) {
    switch (action.type) {
    
        case ACTION_TYPES.GET_USERS_REQUEST: {
            return {
                ...state,
                isFetching:true
            }
        }
        case ACTION_TYPES.GET_USERS_SUCCESS: {
            const {payload: {users}} = action
            return {
                ...state,
                isFetching:false,
                users: [...state.users, ...users]
            }
        }
        case ACTION_TYPES.GET_USERS_ERROR: {
            const {payload: {error}} = action
            return {
                ...state,
                isFetching:false,
                error
            }
        }


        case ACTION_TYPES.DELETE_USER_REQUEST: {
            return {
                ...state,
                isFetching:true,
                
            }
        }
        case ACTION_TYPES.DELETE_USER_SUCCESS: {
            const {payload: {user}} = action
            return {
                ...state,
                isFetching:false,
                users: [...state.users].filter(el => el.id !== user.id),
                test: [user, 'dsdfs']
            }
        }
        case ACTION_TYPES.DELETE_USER_ERROR: {
            const {payload: {error}} = action
            return {
                ...state,
                isFetching:false,
                error
            }
        }

        default: return state
            
    }
   
}


export default userReducer