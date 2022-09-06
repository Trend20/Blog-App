import { useLocation } from "react-router";
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';

const Home = () => {
  const location = useLocation();
  return (
    <>
     <Header />
      <div className='home'>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

export default Home