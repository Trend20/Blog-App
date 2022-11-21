import { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  // handle email change
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const FORM_URL = '';
  // form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers:{
          accept: 'application/json'
        },
      })
      const json = await response.json();
      if(json.status === "success"){
        return;
      }
    } catch (error) {
      console.log(error);
    }

  };

  return (
    <form action="https://app.convertkit.com/forms/3801560/subscriptions" onSubmit={handleFormSubmit}>
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
