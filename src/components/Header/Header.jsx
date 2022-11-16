import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <h3>Don't miss any update on our new articles!</h3>
        <p>Get our free articles direct on your email as soon as they get published!</p>
        <form>
          <input className='input' type="text" placeholder='Email Address' />
          <button className='sub-btn' type='submit'>Subscribe</button>
        </form>
      </div>
      <img className='headerImg' src="/assets/home2.jpg" alt="header-img" />
    </div>
  )
}

export default Header;