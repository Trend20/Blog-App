import axios from 'axios';
import { useEffect, useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() =>{
    const getCategories = async() =>{
      const res = await axios.get('http://localhost:5500/api/categories');
     setCategories(res.data);
    }
    getCategories();
  }, [])
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="/assets/profile.jpg" alt="profile" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quidem asperiores mollitia veniam voluptas beatae! Minima accusamus iure consequuntur dolor optio.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className='sidebarList'>
          {
            categories.map(category =>(
              <li className='sidebarListItem'>{category.name}</li>
            ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
       <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-facebook"></i>
        <i className="sidebarIcon fa-brands fa-twitter"></i>
        <i className="sidebarIcon fa-brands fa-github"></i>
        <i className="sidebarIcon fa-brands fa-hashnode"></i>
       </div>
      </div>
    </div>
  )
}

export default Sidebar;