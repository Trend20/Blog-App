import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

const Home = () => {
  return (
    <>
     <Header />
      <div className='home'>
        <Post />
        <Sidebar />
      </div>
    </>
  )
}

export default Home