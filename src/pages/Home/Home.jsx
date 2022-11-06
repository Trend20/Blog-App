import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

const Home = () => {
  const [posts, setPosts ] = useState([]);

  // fetch posts
  useEffect(() =>{
    const fetchPosts = async() =>{
      const res = await axios.get('http://localhost:5500/api/posts');
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  },[]);
  return (
    <>
     <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

export default Home;