import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1 className="counter-heading">Count: {count}</h1>
      <div>
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="counter-button" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
      <style>
        {`
          .counter {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-family: Arial, sans-serif;
          }
          .counter-heading {
            margin-bottom: 20px;
            color: #333;
          }
          .counter-button {
            background-color: #28a745;
            color: #fff;
            border: none;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
          }
          .counter-button:hover {
            background-color: #218838;
          }
        `}
      </style>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <Counter />
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
