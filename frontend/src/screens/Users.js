import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost } from '../Actions/postActions';
import { deleteUser, getUsers } from '../Actions/userActions';
import { DELETE_USER_RESET } from '../constants/userConstants';
import '../css/users.css'

const Users = ({history}) => {

    const allUsers = useSelector(state => state.allUsers);
    const {loading , users} = allUsers;

    const DeleteUser = useSelector(state => state.deleteUser);
    const {loading : loadingDelete , success} = DeleteUser;

    const dispatch = useDispatch();

    useEffect(
        () => {
            if(success) {
                dispatch(getUsers());
                dispatch({type : DELETE_USER_RESET});
            } else {
                if(!users)
                dispatch(getUsers())
            }
        }
    , [dispatch , users , success])

    const deleteHandler = (id) => {
        if(window.confirm('Are you sure that you want to delete the account ?' ))
        dispatch(deleteUser(id));

        console.log(id);
    }

    const handleCreateUser = () => {
        history.push('/admin/user/new');
    }

    return (
        !loading && 
        <div id="usersAdmin">
        <div className="title">All Posts</div>
        <button onClick={handleCreateUser} className="newPost">New User</button>
        <table>
            <thead>
            <tr>
                <td>ID</td>
                <td>NAME</td>
                <td>EMAIL</td>
                <td>PASSWORD</td>
                <td />
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td><i onClick={() => deleteHandler(user._id)} className="fas fa-trash icon"></i> <i onClick={() => history.push(`/admin/user/${user._id}`)} className="fas fa-edit icon"></i></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>        
    )
}

export default Users
