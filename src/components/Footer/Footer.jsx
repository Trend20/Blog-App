import Subscribe from '../Subscribe/Subscribe';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn} from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import './Footer.css';


const Footer = () =>{
  return(
    <div className="footer-container">
      <h3>No Credit card needed!</h3>
      <h1>Start Publishing Your Articles with Notas!</h1>
      <Subscribe />
      <hr />
      <div className="footer-details">
        <div className="details">
          <img src="logo.png" alt="footer-logo" />
        </div>
        <div className="links">
          <Link to="/about" className='footer-link'>About</Link>
          <Link to="/about" className='footer-link'>Price</Link>
          <Link to="/about" className='footer-link'>Login</Link>
          <Link to="/about" className='footer-link'>Sign Up</Link>
          <Link to="/about" className='footer-link'>Contact</Link>
        </div>
        <div className="social">
          <Link to="/about">
            <i><BsTwitter size={25} fill='#1da1f2' /></i>
          </Link>
          <Link to="/about">
            <i><FaFacebookF size={25} fill='#3b5998'/></i>
          </Link>
          <Link to="/about">
            <i><FaLinkedinIn size={25} fill='#3b5998' /></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;