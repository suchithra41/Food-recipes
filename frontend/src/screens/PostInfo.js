import React, { useEffect } from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { getPost } from '../Actions/postActions'
import '../css/postinfo.css'

const Index = ({match}) => {

  const dispatch = useDispatch();

  const id = match.params.id;

  const Post = useSelector(state => state.post);
  const {loading , post} = Post;


  useEffect(
    () => {
      if(!post || id !==post._id){
        dispatch(getPost(id));
      }
    }
  , [dispatch , post , id])

  return (
    !loading && 
   
    <section id="posts-page">
      <div className="go-back">
        <Link to="/"><i className="fas fa-arrow-alt-circle-left" /> GO BACK</Link>
      </div>
      <div className="posts-main">
        <div className="image-container">
          <img style={{height : "350px"}} src={`http://localhost:5000/${post.image}`} />
        </div>
        <div className="details-container">
          <div className="content">
            <div className="title">
              Title : {post.title}
              <div className="title-down">
                <p className="author"><i className="fas fa-user"></i> {post.author}</p>
                <p className="date"><i className="fas fa-calendar-day"> {post.date.substring(0,10)}</i></p>
              </div>
            </div>
            <hr />
            <div className="cook-time sec">
              <p>Cook Time : <i class="fas fa-clock"></i> {post.cookTime.split(':')[0]}hr {post.cookTime.split(':')[1]}hr</p>
            </div>
            <hr />
            <div className="servings sec">
              <p>Servings : {post.servings}</p>
            </div>
            <hr />
            <div className="ingredients">
              <p>ingredients  :</p>
              <ul>
                {post.ingredients.split(',').map(ind => <li>{ind}</li>)}
              </ul>
            </div>
            </div>
        </div>
      </div>
      <div className="procedure">
        <p style={{fontSize : "1.3rem",margin : "10px"}}>Procedure : </p>
        {post.procedure.split('=').map(para => (<><p><span className="number">{para.substring(0 , 1)}</span> {para.substring(1,)}  </p> <hr /> </>))}
      </div>
    </section>

  )
}

export default Index
