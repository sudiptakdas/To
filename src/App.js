import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (firstName) {
      navigate("/Todo");
    }
  };
  return (
    <div className="App">
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          {" "}
          email:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <br /> <br />
        <label>
          {" "}
          password:
          <input
            type="password"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          ></input>{" "}
        </label>
        <br /> <br />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}
