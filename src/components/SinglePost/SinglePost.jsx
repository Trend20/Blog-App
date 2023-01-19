import axios from "axios";
import { useEffect, useContext, useState } from "react";
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
      setTitle(res.data.title);
      setDescription(res.data.description);
    }
    getPost();
  }, [path]);

  // delete 
  const handleDelete = async() =>{
    try {
      await axios.delete(`http://localhost:5500/api/posts/${postItem._id}`, {data: {username: user.username}});
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  }

  // update
  const handleUpdate = async () =>{
    try {
      await axios.put(`http://localhost:5500/api/posts/${postItem._id}`, {username: user.username, title, description});
      // window.location.reload();
      setUpdateMode(false)
    } catch (error) {
      console.log(error);
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
        {
          updateMode ? <input type="text" value={title} className="singlePostTitleInput" onChange={(e) =>setTitle(e.target.value)}/> : (
            <h1 className="singlePostTitle">
         {title}
         {postItem.username === user?.username && ( <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
            <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
          </div>)}
        </h1>
          )
        }
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
       { updateMode ? <textarea value={description} className="singlePostDescInput" onChange={(e) =>setDescription(e.target.value)}></textarea> : ( <p className="singlePostDesc">
          {description}
        </p>)}

        {updateMode && (<button className="singlePostUpdate" onClick={handleUpdate}>Update</button>)}
      </div>
    </div>
  )
}

export default SinglePost;