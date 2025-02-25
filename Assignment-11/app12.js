import React from "react";

function Greeting(props) {
  return <h1 className="greeting">Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div className="container">
      <Greeting name="Aditya" />
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-family: Arial, sans-serif;
          }
          .greeting {
            background-color: #e0f7fa;
            padding: 20px;
            border-radius: 8px;
            color: #00796b;
          }
        `}
      </style>
    </div>
  );
}

export default App;
