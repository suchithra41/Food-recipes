import Post from '../modals/postModal.js'
import connectDb from '../utils/connectDb.js'

connectDb();

export const fetchAllPosts = async(req , res) => {
    try {
        const posts = await Post.find({});
        res.json(posts);
    } catch (error){
        res.status(500).json({Message : "Something went Wrong"});
        throw new Error(error);
    }
}

export const fetchPost = async(req , res) => {
    const id = req.params.id;

    const post = await Post.findById(id);

    if(post){
        res.json(post)
    }else {
        res.status(404);
        throw new Error('Post Not Found')
    }
}

export const addPost = async(req , res) => {
    const {title , author , ingredients , procedure ,image , date , cookTime , servings } = req.body;

    try {
        const post = await Post.create({
            title,
            author,
            ingredients,
            procedure,
            image,
            date,
            cookTime,
            servings,
        });

        res.json(post);
    } catch(error) {
        res.status(500);
        throw new Error(error);
    }
}

export const deletePost = async(req , res) => {
    const id = req.params.id

    const post = await Post.findById(id);

    try {
        if(post){
            const post = await Post.findByIdAndRemove(id);
            res.json(post)
        } else {
            res.status(404);
            throw new Error('Post Not Found');
        }
    } catch(error) {
        res.status(500);
        throw new Error(error);
    }
}

export const editPost = async(req , res) => {
    const {title , author , ingredients , procedure ,image , date , cookTime , servings } = req.body;
    const id = req.params.id

    try {
        const post = await Post.findByIdAndUpdate(id , {
            title,
            author,
            ingredients,
            procedure,
            image,
            date,
            cookTime,
            servings,
            date : req.date ? req.date : new Date()
        });

        res.json(post);
    } catch(error) {
        res.status(500);
        throw new Error(error);
    }
}