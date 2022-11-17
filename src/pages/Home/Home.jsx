import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
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
     <Header />
      <div className='home'>
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  )
}

export default Home;