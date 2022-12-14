import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CgProfile } from 'react-icons/cg';
import { FiArrowRight } from 'react-icons/fi'
// import { MdFacebook } from 'react-icons/md';
// import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai'
import './Register.css';

const Register = () => {

  const { register, handleSubmit, watch, formState:{errors}} = useForm();
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
      <form className="registerForm" onSubmit={handleSubmit(handleFormSubmit)}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          {...register("username", { required: true })}
        />
        <p className="error-text">{errors.username && <span>Username is required</span>}</p>
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          {...register("email", { required: true })}
        />
        <p className="error-text">{errors.email && <span>Email is required</span>}</p>
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          {...register("password", { required: true })}
        />
        <p className="error-text">{errors.password && <span>Password is required</span>}</p>
        <button className="registerButton" type="submit">
          Register
          <i><FiArrowRight size= {25}/></i>
        </button>
        {/* <hr /> */}
      </form>
      {/* <div className="social-icons">
        <h5>Or create account using social media!</h5>
        <span>
          <i><MdFacebook size={25} fill='#3b5998'/></i>
          <i><AiFillTwitterCircle size={25} fill='#1da1f2' /></i>
          <i><AiFillGithub size={25} fill='#171515' /></i>
        </span>
      </div> */}
      <p className="login-text">Already a member? 
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