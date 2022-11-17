import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({posts}) {
  return (
    <div className="posts" id="posts">
      {
        posts.map(post =>(
          <Post post={post} />
        ))
      }
    </div>
  );
}