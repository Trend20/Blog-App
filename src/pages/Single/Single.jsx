import './Single.css';
import SinglePost from '../../components/SinglePost/SinglePost'
import Sidebar from '../../components/Sidebar/Sidebar';

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single;