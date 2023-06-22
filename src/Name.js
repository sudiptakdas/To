import "./styles.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Name() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    navigate("/Todo");
  };
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          {" "}
          FullName:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <br /> <br />
        <label>
          {" "}
          FatherName:
          <input
            type="text"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          ></input>{" "}
        </label>
        <br />
        <br />
        <label>
          {" "}
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>{" "}
        </label>
        <br />
        <br />
        <label>
          {" "}
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>{" "}
        </label>
        <br /> <br />
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}
