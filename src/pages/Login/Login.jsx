import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
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
            placeholder="Enter your username..."
            ref={userRef}
          />
          <label>Password</label>
          <input
            className="loginInput"
            type="password"
            placeholder="Enter your password..."
            ref={passwordRef}
          />
          <button className="loginButton" type="submit" disabled={isFetching}>
            Login
          </button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">
            Register
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
