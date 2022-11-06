import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './SinglePost.css';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]
  // console.log(path);

  const [postItem, setPostItem] = useState({});
  // fetch the post using id
  useEffect(() =>{
    const getPost = async() =>{
      const res = await axios.get('http://localhost:5500/api/posts/' + path)
      setPostItem(res.data);
      // console.log(res)
    }
    getPost();
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        { postItem.photo && (<img
          className="singlePostImg"
          src={postItem.photo}
          alt=""
        />)}
        <h1 className="singlePostTitle">
         {postItem.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to={`/?user=${postItem.username}`}>
                {postItem.username}
              </Link>
            </b>
          </span>
          <span>{new Date(postItem.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc">
          {postItem.description}
        </p>
      </div>
    </div>
  )
}

export default SinglePost;