import Post from "../Post/Post";
import "./Posts.css";

export default function Posts({posts}) {
  return (
    posts.length > 0 ? (
      <div className="posts" id="posts">
      {
        posts.map(post =>(
          <Post post={post} />
        ))
      }
    </div>) :
    (
      <div>Loading....</div>
    )
  );
}