import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='titleSm'>React & Node</span>
        <span className='titleLg'>Blog</span>
      </div>
      <img className='headerImg' src="/assets/header.jpg" alt="header-img" />
    </div>
  )
}

export default Header;