import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  const user = true;
  return (
    <div className='topBar'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-hashnode"></i>
      </div>
      <div className="topCenter">
        <ul className="topBarList">
          <li className="topBarListItem">
            <Link className='link' to="/">
              HOME
            </Link>
          </li>
          <li className="topBarListItem">ABOUT</li>
          <li className="topBarListItem">WORK</li>
          <li className="topBarListItem">CONTACT</li>
          <li className="topBarListItem">
            <Link className='link' to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar;