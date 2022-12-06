import axios from "axios";
import { useEffect, useContext } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './SinglePost.css';
import { Context } from '../../context/Context';

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[2]
  // console.log(path);
  const PF = "http://localhost:5500/images/";
  const { user } = useContext(Context);
  const [title, setTitle ] = useState('');
  const [description, setDescription] = useState('');
  const [updateMode, setUpdateMode] = useState(false);

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

  // delete 

  const handleDelete = async() =>{
    try {
      await axios.delete(`http://localhost:5500/api/posts/${postItem._id}`, {data: {username: user.username}});
      window.location.replace("/");
    } catch (error) {
      
    }
  }

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        { postItem.photo && (<img
          className="singlePostImg"
          src={PF + postItem.photo}
          alt=""
        />)}
        <h1 className="singlePostTitle">
         {postItem.title}
         {postItem.username === user?.username && ( <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>)}
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