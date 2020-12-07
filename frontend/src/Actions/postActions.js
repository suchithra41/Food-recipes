import axios from 'axios'
const { FETCH_POSTS_DISPATCH, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL, FETCH_POST_DISPATCH, FETCH_POST_SUCCESS, FETCH_POST_FAIL, DELETE_POST_DISPATCH, DELETE_POST_SUCCESS, DELETE_POST_FAIL, EDIT_POST_DISPATCH, EDIT_POST_SUCCESS, EDIT_POST_FAIL, ADD_POST_DISPATCH, ADD_POST_SUCCESS, ADD_POST_FAIL } = require("../constants/postConstants")

export const getPosts = () => async (dispatch) => {
    dispatch({type : FETCH_POSTS_DISPATCH , loading : true})

    try {
        const {data} = await axios.get('http://localhost:5000/api/posts');
        dispatch({type : FETCH_POSTS_SUCCESS , payload : data , loading : true});
    } catch (error) {
        dispatch({type : FETCH_POSTS_FAIL , payload : error});
    }
}

export const getPost = (id) => async (dispatch) => {
    dispatch({type : FETCH_POST_DISPATCH , loading : true})

    try {
        const {data} = await axios.get(`http://localhost:5000/api/posts/${id}`);
        dispatch({type : FETCH_POST_SUCCESS , payload : data , loading : true});
    } catch (error) {
        dispatch({type : FETCH_POST_FAIL , payload : error});
    }
}

export const deletePost = (id) => async (dispatch) => {
    dispatch({type : DELETE_POST_DISPATCH , loading : true})

    try {
        const {data} = await axios.delete(`http://localhost:5000/api/posts/admin/${id}`);
        dispatch({type : DELETE_POST_SUCCESS , success : true , loading : true});
    } catch (error) {
        dispatch({type : DELETE_POST_FAIL , payload : error});
    }
}

export const editPost = (id , post) => async (dispatch) => {
    dispatch({type : EDIT_POST_DISPATCH , loading : true})

    try {
        const header = {headers : {'Content-Type' : 'application/json'}}
        const {data} = await axios.put(`http://localhost:5000/api/posts/admin/${id}` , post , header);
        dispatch({type : EDIT_POST_SUCCESS , success : true , loading : true});
    } catch (error) {
        dispatch({type : EDIT_POST_FAIL , payload : error});
    }
}

export const addPost = (post) => async (dispatch) => {
    dispatch({type : ADD_POST_DISPATCH , loading : true})

    try {
        const header = {headers : {'Content-Type' : 'application/json'}}
        const {data} = await axios.post(`http://localhost:5000/api/posts/admin/` , post , header);
        dispatch({type : ADD_POST_SUCCESS , success : true , loading : true});
    } catch (error) {
        dispatch({type : ADD_POST_FAIL , payload : error});
    }
}