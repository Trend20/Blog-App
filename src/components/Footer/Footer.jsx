import Subscribe from '../Subscribe/Subscribe';
import { Link } from 'react-router-dom';
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
          <p>Publish your Work Here!</p>
        </div>
        <div className="links">
          <Link to="/about">About</Link>
          <Link to="/about">Price</Link>
          <Link to="/about">Login</Link>
          <Link to="/about">Sign Up</Link>
          <Link to="/about">Contact</Link>
        </div>
        <div className="social">
          <Link to="/about">
            <i></i>
          </Link>
          <Link to="/about">
            <i></i>
          </Link>
          <Link to="/about">
            <i></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;