import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FiArrowRight } from 'react-icons/fi'
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import './Register.css';

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError ] =useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("http://localhost:5500/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace('/login');
    } catch (error) {
      setError(true)
    }
  };

  return (
    <div className="register">
     <div className="register-contents">
     <div className="login-header">
          <i>
            <CgProfile />
          </i>
          <h1>Create Account!</h1>
        </div>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
          <i><FiArrowRight size= {25}/></i>
        </button>
        <hr />
      </form>
      <div className="social-icons">
        <h5>Or create account using social media!</h5>
        <span>
          <i><MdFacebook size={25}/></i>
          <i><AiFillTwitterCircle size={25}/></i>
          <i><AiFillGithub size={25}/></i>
        </span>
      </div>
      <p className="sign-up">Already a member? 
        <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      {error && <span>Something went wrong!</span>}
     </div>
    </div>
  );
}
export default Register;