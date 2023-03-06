import axios from "axios";
import { useEffect, useState} from "react";
import { useLocation } from "react-router";
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
// import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

const Home = () => {

  const [posts, setPosts ] = useState([]);
  const { search } = useLocation();

  // fetch posts
  useEffect(() =>{
    const fetchPosts = async() =>{
      const res = await axios.get('http://localhost:5500/api/posts' + search);
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  },[search]);
  return (
    <>
     <div>
     <Header 
      title="Don't miss any update on our new articles!" 
      description="Get our free articles direct on your email as soon as they get published!" 
     />
      <div className='home'>
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
     </div>
    </>
  )
}

export default Home;