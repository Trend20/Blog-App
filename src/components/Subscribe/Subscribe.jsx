import { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  // handle email change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        className="input"
        value={email}
        name="email_address"
        onChange={handleEmailChange}
        type="email"
        placeholder="Email Address"
      />
      <button className="sub-btn" type="submit">
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;
