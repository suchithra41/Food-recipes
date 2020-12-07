import express from 'express';
import {addPost, deletePost, editPost, fetchAllPosts, fetchPost} from '../controllers/postControllers.js'
const router = express.Router();

router.get('/' , fetchAllPosts);
router.get('/:id' , fetchPost);
router.put('/admin/:id' , editPost);
router.post('/admin' , addPost);
router.delete('/admin/:id' , deletePost);

export default router