import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUsers } from '../Actions/userActions';
import { ADD_USER_RESET } from '../constants/userConstants';
import '../css/userEdit.css'

const UserNew = ({history}) => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const dispatch = useDispatch();

    const AddUser = useSelector(state => state.addUser);
    const {loading , success} = AddUser;

    useEffect(
        () => {
            if(success){
                history.push('/admin/users');
                dispatch({type : ADD_USER_RESET});
            }
        }
        , [dispatch , success]
    )

    const addUserHandler = () => {
        dispatch(addUser({name , email , password}))
        dispatch(getUsers());
    }

    return (
        <section id="userEdit">
            <p className="title">Add Users</p>
            <div className="msg-container">
            </div>
            <div className="name-container">
                <label className="name-label">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="name" />
            </div>
            <div className="email-container">
                <label className="author-label">Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" />
            </div>
            <div className="password-container">
                <label className="author-label">password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
            </div>
            <button onClick={addUserHandler} className="submit">Add User</button>
        </section>
    )
}

export default UserNew
