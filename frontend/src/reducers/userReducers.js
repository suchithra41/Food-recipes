import { FETCH_USERS_DISPATCH, FETCH_USERS_SUCCESS, FETCH_USERS_FAIL, FETCH_USER_DISPATCH, FETCH_USER_SUCCESS, FETCH_USER_FAIL, DELETE_USER_DISPATCH, DELETE_USER_SUCCESS, DELETE_USER_FAIL, DELETE_USER_RESET, EDIT_USER_DISPATCH, EDIT_USER_SUCCESS, EDIT_USER_FAIL, EDIT_USER_RESET, ADD_USER_DISPATCH, ADD_USER_SUCCESS, ADD_USER_FAIL, ADD_USER_RESET } from "../constants/userConstants.js"

export const fetchUsersReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case FETCH_USERS_DISPATCH:
            return {loading : true}
        case FETCH_USERS_SUCCESS:
            return {loading : false , users : action.payload}
        case FETCH_USERS_FAIL:
            return {loading : false , error : action.payload}
        default :
            return state

    }
}

export const fetchUserReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case FETCH_USER_DISPATCH:
            return {loading : true}
        case FETCH_USER_SUCCESS:
            return {loading : false , user : action.payload}
        case FETCH_USER_FAIL:
            return {loading : false , error : action.payload}
        default :
            return state

    }
}

export const deleteUserReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case DELETE_USER_DISPATCH:
            return {loading : true}
        case DELETE_USER_SUCCESS:
            return {loading : false , success : true}
        case DELETE_USER_FAIL:
            return {loading : false , error : action.payload}
        case DELETE_USER_RESET:
            return {}
        default :
            return state

    }
}

export const editUserReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case EDIT_USER_DISPATCH:
            return {loading : true}
        case EDIT_USER_SUCCESS:
            return {loading : false , success : true}
        case EDIT_USER_FAIL:
            return {loading : false , error : action.payload}
        case EDIT_USER_RESET:
            return {}
        default :
            return state

    }
}

export const addUserReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case ADD_USER_DISPATCH:
            return {loading : true}
        case ADD_USER_SUCCESS:
            return {loading : false , success : true}
        case ADD_USER_FAIL:
            return {loading : false , error : action.payload}
        case ADD_USER_RESET:
            return {}
        default :
            return state

    }
}