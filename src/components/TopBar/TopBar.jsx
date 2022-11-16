import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './TopBar.css';

const TopBar = () => {
  const {user, dispatch} = useContext(Context);

  const handleLogout = () =>{
    dispatch({type: 'LOGOUT'})
  }
  return (
    <div className='topBar'>
      <div className="topLeft">
        {/* <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-github"></i>
        <i className="topIcon fa-brands fa-hashnode"></i> */}
        <img src="logo.png" alt="logo" />
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
          <li className="topListItem" onClick={handleLogout}>{user &&  'LOGOUT'}</li>
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src={user.profilePic}
              alt=""
            />
          </Link>
        ) : (
          <button className='action-btn'>
            <Link className="link" to="/login">
                Join
              </Link>
          </button>
        )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar;