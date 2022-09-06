import './TopBar.css';

const TopBar = () => {
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
          <li className="topBarListItem">HOME</li>
          <li className="topBarListItem">ABOUT</li>
          <li className="topBarListItem">WORK</li>
          <li className="topBarListItem">CONTACT</li>
          <li className="topBarListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img src="" alt="" className="topImg" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default TopBar;