import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, getPosts } from '../Actions/postActions';
import { DELETE_POST_RESET } from '../constants/postConstants';
import '../css/posts.css'

const Posts = ({history}) => {

    const dispatch = useDispatch();

    const allPosts = useSelector(state => state.allPosts);
    const {loading , posts} = allPosts;

    const deletedPost = useSelector(state => state.deletePost);
    const {success , loading:loadingDelete} = deletedPost;

    useEffect(
    () => {
        if(success){
            dispatch(getPosts());
            dispatch({type : DELETE_POST_RESET})
        }
        else {
            if(!posts){
                dispatch(getPosts());
            }
        }
    }
    , [dispatch , posts , success])

    const deleteHandler = (id) => {
        if(window.confirm('Are you that you would like to delete the post'))
        dispatch(deletePost(id));    
    }

    const handleCreatePost = () => {
        history.push('/admin/post');
    }

    return (
        !loading && 
        <div id="postsAdmin">
        <div className="title">All Posts</div>
        <button onClick={handleCreatePost} className="newPost">New Post</button>
        <table>
            <thead>
            <tr>
                <td>ID</td>
                <td>DATE</td>
                <td>TITLE</td>
                <td>AUTHOR</td>
                <td>COMMENTS</td>
                <td>INGREDIENTS</td>
                <td />
            </tr>
            </thead>
            <tbody>
            {posts.map((post) => (
                <tr key={post._id}>
                    <td>{post._id}</td>
                    <td>{post.date.substring(0 , 10)}</td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td>{post.comments.length}</td>
                    <td>{post.ingredients.split(',').length}</td>
                    <td><i onClick={() => deleteHandler(post._id)} className="fas fa-trash icon"></i> <i onClick={() => history.push(`/admin/post/${post._id}`)} className="fas fa-edit icon"></i></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    )
}

export default Posts
