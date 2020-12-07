const { FETCH_POSTS_DISPATCH, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL, FETCH_POST_DISPATCH, FETCH_POST_SUCCESS, FETCH_POST_FAIL, DELETE_POST_DISPATCH, DELETE_POST_SUCCESS, DELETE_POST_FAIL, DELETE_POST_RESET, EDIT_POST_DISPATCH, EDIT_POST_SUCCESS, EDIT_POST_FAIL, EDIT_POST_RESET, ADD_POST_DISPATCH, ADD_POST_SUCCESS, ADD_POST_FAIL, ADD_POST_RESET } = require("../constants/postConstants");

export const fetchPostsReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case FETCH_POSTS_DISPATCH:
            return {loading : true}
        case FETCH_POSTS_SUCCESS:
            return {loading : false , posts : action.payload}
        case FETCH_POSTS_FAIL:
            return {loading : false , error : action.payload}
        default :
            return state

    }
}

export const fetchPostReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case FETCH_POST_DISPATCH:
            return {loading : true}
        case FETCH_POST_SUCCESS:
            return {loading : false , post : action.payload}
        case FETCH_POST_FAIL:
            return {loading : false , error : action.payload}
        default :
            return state

    }
}

export const deletePostReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case DELETE_POST_DISPATCH:
            return {loading : true}
        case DELETE_POST_SUCCESS:
            return {loading : false , success : true}
        case DELETE_POST_FAIL:
            return {loading : false , error : action.payload}
        case DELETE_POST_RESET:
            return {}
        default :
            return state

    }
}

export const editPostReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case EDIT_POST_DISPATCH:
            return {loading : true}
        case EDIT_POST_SUCCESS:
            return {loading : false , success : true}
        case EDIT_POST_FAIL:
            return {loading : false , error : action.payload}
        case EDIT_POST_RESET:
            return {}
        default :
            return state

    }
}

export const addPostReducer = (state = {loading : true} , action) => {
    switch(action.type){
        case ADD_POST_DISPATCH:
            return {loading : true}
        case ADD_POST_SUCCESS:
            return {loading : false , success : true}
        case ADD_POST_FAIL:
            return {loading : false , error : action.payload}
        case ADD_POST_RESET:
            return {}
        default :
            return state

    }
}