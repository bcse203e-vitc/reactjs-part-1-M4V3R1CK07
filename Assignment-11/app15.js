import React, { useState } from "react";

function AgeChecker() {
  const [age, setAge] = useState("");

  return (
    <div className="age-checker">
      <input
        type="number"
        placeholder="Enter your age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="age-input"
      />
      <p className="age-message">
        {age === ""
          ? "Please enter your age"
          : age >= 18
          ? "You are an adult"
          : "You are a minor"}
      </p>
      <style>
        {`
          .age-checker {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-family: Arial, sans-serif;
          }
          .age-input {
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ccc;
            border-radius: 5px;
            width: 200px;
            margin-bottom: 20px;
          }
          .age-message {
            font-size: 18px;
            color: #333;
          }
        `}
      </style>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <AgeChecker />
      <style>
        {`
          .container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
        `}
      </style>
    </div>
  );
}

export default App;
