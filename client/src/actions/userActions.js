import ACTION_TYPES from "./actionsType";


export const postUserRequest = ({values}) => ({
    type: ACTION_TYPES.POST_USER_REQUEST,
    payload: {values}
})

export const postUserSuccess = ({user}) => ({
    type: ACTION_TYPES.POST_USER_SUCCESS,
    payload: {user}
})

export const postUserError = ({error}) => ({
    type: ACTION_TYPES.POST_USER_ERROR,
    payload: {error}
})



export const getUserRequest = ({limit, offset}) => ({
    type: ACTION_TYPES.GET_USERS_REQUEST,
    payload: {limit, offset}
})

export const getUserSuccess = ({users}) => ({
    type: ACTION_TYPES.GET_USERS_SUCCESS,
    payload: {users}
})

export const getUserError = ({error}) => ({
    type: ACTION_TYPES.GET_USERS_ERROR,
    payload: {error}
})


