import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { editUser, getUser, getUsers } from '../Actions/userActions';
import { EDIT_USER_RESET } from '../constants/userConstants';
import '../css/userEdit.css'

const UserEdit = ({history , match}) => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const dispatch = useDispatch();

    const EditUser = useSelector(state => state.editUser);
    const {loading , success} = EditUser;

    const User = useSelector(state => state.user);
    const {loading:loadingUser , user} = User;

    const id = match.params.id

    useEffect(
        () => {
            if(success){
                history.push('/admin/users');
                dispatch({type : EDIT_USER_RESET});
                dispatch(getUsers());
            }else {{
                if(!user || user._id != id){
                    dispatch(getUser(id));
                } else {
                    setName(user.name);
                    setEmail(user.email);
                    setPassword(user.password);
                }
            }}
        }
        , [dispatch , success , user , id]
    )

    const addUserHandler = () => {
        dispatch(editUser(id , {name , email , password}));
    }

    return (
        <section id="userEdit">
            <p className="title">Edit User</p>
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

export default UserEdit
