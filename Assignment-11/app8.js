import React from "react";

function ClickMe() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <button onClick={handleClick} className="button-style">
      Click Me
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <ClickMe />
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 25%;
            font-family: Arial, sans-serif;
          }
          .button-style {
            background-color: #007BFF;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .button-style:hover {
            background-color: #0056b3;
          }
        `}
      </style>
    </div>
  );
}

export default App;
