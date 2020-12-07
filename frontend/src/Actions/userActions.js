import { ADD_USER_DISPATCH, ADD_USER_FAIL, ADD_USER_SUCCESS, DELETE_USER_DISPATCH, DELETE_USER_FAIL, DELETE_USER_SUCCESS, EDIT_USER_DISPATCH, EDIT_USER_FAIL, EDIT_USER_SUCCESS, FETCH_USERS_DISPATCH, FETCH_USERS_FAIL, FETCH_USERS_SUCCESS, FETCH_USER_DISPATCH, FETCH_USER_FAIL, FETCH_USER_SUCCESS } from "../constants/userConstants";
import axios from 'axios'

export const getUsers = () => async (dispatch) => {
    dispatch({type : FETCH_USERS_DISPATCH , loading : true})

    try {
        const {data} = await axios.get('http://localhost:5000/api/users');
        dispatch({type : FETCH_USERS_SUCCESS , payload : data , loading : true});
    } catch (error) {
        dispatch({type : FETCH_USERS_FAIL , payload : error});
    }
}

export const getUser = (id) => async (dispatch) => {
    dispatch({type : FETCH_USER_DISPATCH , loading : true})

    try {
        const {data} = await axios.get(`http://localhost:5000/api/users/${id}`);
        dispatch({type : FETCH_USER_SUCCESS , payload : data , loading : true});
    } catch (error) {
        dispatch({type : FETCH_USER_FAIL , payload : error});
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch({type : DELETE_USER_DISPATCH , loading : true})

    try {
        const {data} = await axios.delete(`http://localhost:5000/api/users/admin/${id}`);
        dispatch({type : DELETE_USER_SUCCESS , success : true , loading : true});
    } catch (error) {
        dispatch({type : DELETE_USER_FAIL , payload : error});
    }
}

export const editUser = (id , user) => async (dispatch) => {
    dispatch({type : EDIT_USER_DISPATCH , loading : true})

    try {
        const header = {headers : {'Content-Type' : 'application/json'}}
        const {data} = await axios.put(`http://localhost:5000/api/users/admin/${id}` , user , header);
        dispatch({type : EDIT_USER_SUCCESS , success : true , loading : true});
    } catch (error) {
        dispatch({type : EDIT_USER_FAIL , payload : error});
    }
}

export const addUser = (user) => async (dispatch) => {
    dispatch({type : ADD_USER_DISPATCH , loading : true})

    try {
        const header = {headers : {'Content-Type' : 'application/json'}}
        const {data} = await axios.post(`http://localhost:5000/api/users/new/` , user , header);
        dispatch({type : ADD_USER_SUCCESS , success : true , loading : true});
    } catch (error) {
        dispatch({type : ADD_USER_FAIL , payload : error});
    }
}