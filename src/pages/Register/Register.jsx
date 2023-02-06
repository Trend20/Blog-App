import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FiArrowRight } from 'react-icons/fi'
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError ] =useState(false);

  const handleFormSubmit = async (e) => {
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
      <form className="registerForm" onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <p className="error-text"><span>Username is required</span></p> */}
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <p className="error-text"><span>Email is required</span></p> */}
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p className="error-text"><span>Password is required</span></p> */}
        <button className="registerButton" type="submit">
          Register
          <i><FiArrowRight size= {25}/></i>
        </button>
      </form>
      <p className="login-text">Already a member? 
        <Link to="/login" className="signup-link">
            Login
          </Link>
        </p>
      {/* {error && <span>Something went wrong!</span>} */}
     </div>
    </div>
  );
}
export default Register;