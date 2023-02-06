import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { Context } from '../../context/Context';

const Sidebar = () => {

  const [categories, setCategories] = useState([]);
  const user = useContext(Context);

  useEffect(() =>{
    const getCategories = async() =>{
      const res = await axios.get('http://localhost:5500/api/categories');
     setCategories(res.data);
    }
    getCategories();
  }, [])
  return (
    <div className='sidebar'>
    {/* <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img src={user.profilePic} alt="profile" />
      <p>Frontend Software Developer</p>
    </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          {
            categories.map(category =>(
              <Link to={`/?cat=${category.name}`} className="link">
                <li className='sidebarListItem'>{category.name}</li>
              </Link>
            ))}
        </ul>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
       <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-github"></i>
        <i className="sidebarIcon fa-brands fa-hashnode"></i>
       </div>
      </div> */}
    </div>
  )
}

export default Sidebar;