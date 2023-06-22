import "./styles.css";

import React, { useState } from "react";

export default function ToDo() {
  const [values, setValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      setValues([...values, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="Todo">
      <h1>To Do's</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Value:
          <input type="text" value={inputValue} onChange={handleChange} />
          <br />
          <br />
          <button type="submit"> Value</button>
        </label>
      </form>
      {values.length > 0 && (
        <div>
          <ul>
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
