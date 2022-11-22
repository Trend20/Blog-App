import { Link } from 'react-scroll';
import { CgScrollV } from 'react-icons/cg'
import './Header.css';
import Subscribe from '../Subscribe/Subscribe';

const Header = () => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <h3>Don't miss any update on our new articles!</h3>
        <p>Get our free articles direct on your email as soon as they get published!</p>
        <Subscribe />
        <Link className="scroll-down" to="posts" smooth={true} >
          <CgScrollV size={50} color="blue" />
        </Link>
      </div>
    </div>
  )
}

export default Header;