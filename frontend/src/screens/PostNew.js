import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../Actions/postActions';
import { EDIT_POST_RESET } from '../constants/postConstants';
import '../css/postedit.css'

const PostEdit = ({match , history}) => {

    const [title , setTitle] = useState('');
    const [author , setAuthor] = useState('')
    const [procedure , setProcedure] = useState('')
    const [image , setImage] = useState('')
    const [cookTime , setcookTime] = useState('')
    const [servings , setServings] = useState('')
    const [ingredients , setIngredients] = useState('')

    const dispatch = useDispatch();

    const AddPost = useSelector(state => state.addPost);
    const {loading , success} = AddPost

    useEffect(
        () => {
        if(success){
            history.push('/admin/posts');
            dispatch({type : EDIT_POST_RESET});
        }
        }
    , [dispatch , success]);

    const addPostHandler = () => {
        dispatch(addPost({title , author , procedure , image , cookTime , servings , ingredients}));
    }

    const uploadFileHandler = async(e) => {
        const file = e.target.files[0];

        const formData = new FormData()
        formData.append('image' , file);

        try {
            const header = {headers : {'Content-Type' : 'multipart/form-data'}}

            const {data} = await Axios.post('http://localhost:5000/api/upload' , formData , header);

            setImage(data);

        } catch(error){
            throw new Error(error);
        }
    }

    return (
        <section id="postEdit">
            <p className="title">Edit Posts</p>
            <div className="msg-container">
            </div>
            <div className="title-container">
                <label className="title-label">Title</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            </div>
            <div className="author-container">
                <label className="author-label">Author</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="author" />
            </div>
            <div className="ingredients-container">
                <label className="ingredients-label">Ingredients</label>
                <input type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Title" />
            </div>
            <div className="procedure-container">
                <label className="procedure-label">Cooking Procedure</label>
                <textarea type="text" value={procedure} onChange={(e) => setProcedure(e.target.value)} placeholder="procedure" />
            </div>
            <div className="image-container">
                <label className="image-label">Image</label>
                <input type="file" onChange={uploadFileHandler} />
                <input style={{display : "block"}} type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image url" />
            </div>
            <div className="cookTime-container">
                <label className="cookTime-label">Cooking Time</label>
                <input type="Time" value={cookTime} onChange={(e) => setcookTime(e.target.value)} placeholder="cookTime" />
            </div>
            <div className="servings-container">
                <label className="servings-label">servings</label>
                <input type="text" value={servings} onChange={(e) => setServings(e.target.value)} placeholder="Servings" />
            </div>

            <button onClick={addPostHandler} className="submit">Add Post</button>
        </section>    )
}

export default PostEdit
