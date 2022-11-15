import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { FiArrowRight } from 'react-icons/fi'
import "./Login.css";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5500/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  // console.log(user);
  return (
    <div className="login">
      <div className="login-contents">
        <div className="login-header">
          <i>
            <FaSignInAlt />
          </i>
          <h1>Welcome!</h1>
          <h5>Sign in to your account</h5>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            className="loginInput"
            type="text"
            ref={userRef}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
            <i><FiArrowRight size= {25}/></i>
          </button>
        </form>
        <p className="sign-up">Not a member yet? 
        <Link to="/register" className="signup-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
