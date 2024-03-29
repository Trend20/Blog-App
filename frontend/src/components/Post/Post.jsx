import { Link } from "react-router-dom";
import './Post.css';

const Post = ({post}) => {
  const PF = "http://localhost:5500/images/";
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="post" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map(category =>(
            <span className="postCat">
            <Link className="link" to={`/posts?cat=${category.name}`}>
              {category.name}
            </Link>
          </span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            {post.title}
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.description}</p>
      <Link to={`/post/${post._id}`} id="read-more">Read More</Link>
    </div>
  );
}

export default Post;