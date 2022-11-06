import { Link } from "react-router-dom";
import './Post.css';

const Post = ({post}) => {
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={post.photo} alt="post" />}
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
    </div>
  );
}

export default Post;