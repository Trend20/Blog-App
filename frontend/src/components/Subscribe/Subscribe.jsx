import { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState("");

  const FORM_URL = "https://app.convertkit.com/forms/3801514/subscriptions";
  // form submission
  const handleFormSubmit = async (event) => {
  // prevent default form behavior
    event.preventDefault();
    const data = new FormData(event.target);
    try {
      const response = await fetch(FORM_URL, {
        method: "post",
        body: data,
        headers: {
          accept: "application/json",
        },
      });
      setEmail("");
      const json = await response.json();
      setStatus(json.status);
      console.log(response, status);
      if (json.status === "success") {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="subscription-container">
      {status === "SUCCESS" && (
        <div>
          <p>
            Welcome aboard{email ? `, ${email}` : ""}{" "}
            <span role="img" aria-label="Ship">
              🚢
            </span>
          </p>
          <p>Please check your inbox to confirm the subscription!</p>
        </div>
      )}
      {status === "ERROR" && (
        <div>
          <p>Oops, something went wrong...</p>
          <p>
            Please, <button onClick={() => setStatus(null)}>try again.</button>
          </p>
        </div>
      )}
      {status === null && (
        <form
          action="https://app.convertkit.com/forms/3801514/subscriptions"
          onSubmit={handleFormSubmit}
        >
          <input
            className="input"
            value={email}
            name="email_address"
            onChange={(e) =>setEmail(e.target.value)}
            type="email"
            placeholder="Email Address"
          />
          <button className="sub-btn" type="submit">
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default Subscribe;
