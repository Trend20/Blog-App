import { Link } from 'react-scroll';
import { CgScrollV } from 'react-icons/cg'
import './Header.css';
import Subscribe from '../Subscribe/Subscribe';

const Header = ({title, description}) => {
  return (
    <div className='header'>
      <div className="headerTitles">
        <h3>{title}</h3>
        <p>{description}</p>
        <Subscribe />
        <Link className="scroll-down" to="posts" smooth={true} >
          <CgScrollV size={50} color="blue" />
        </Link>
      </div>
    </div>
  )
}

export default Header;