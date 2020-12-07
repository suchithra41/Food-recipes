import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getPosts } from '../Actions/postActions'
import '../css/Index.css'

const Index = () => {

  const dispatch = useDispatch();
  
  const allPosts = useSelector(state => state.allPosts);
  const {loading , posts} = allPosts;

  useEffect(
    () => {
      if(!posts){
        dispatch(getPosts())
      }
    }
  , [dispatch , posts])

  return (
      <>
        <section id="posts">
          <div className="heading">Latest posts</div>
          <div className="posts-container">
            {!loading ? posts.map(post => (<div key={post._id} className="post">
              <div className="post-padding">
                <img style={{width : "100%" , height : "120px"}} src={`http://localhost:5000${post.image}`} />
                {console.log(post.image)}
                <div className="post-details">
                  <div className="author"><i className="fas fa-user"></i>{post.author}</div>
                  <div className="date">{post.date.substring(0 , 10)}</div>
                  <div className="title"> Title :  {post.title}</div>
                  <div className="time">Cooking Time : {post.cookTime.split(':')[0]}hr {post.cookTime.split(':')[1]}hr</div>
                  <div className="total">Total Ingredients : {post.ingredients.split(',').length}</div>
                  <div className="serving">Servings : {post.servings} </div>
                  <Link to={`/post/${post._id}`}><div className="readmore"><button className="read-btn">Read More</button></div></Link>
                  <div className="comments"><i className="far fa-comments"></i> {post.comments.length}</div>
                </div>
              </div>
            </div>)) : 'Loading........'}
          </div>
        </section>

      </>
  )
}

export default Index
