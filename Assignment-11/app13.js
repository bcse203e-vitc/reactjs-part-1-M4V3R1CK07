import React from "react";

function Info() {
  return (
    <>
      <h1 className="info-title">Title</h1>
      <p className="info-description">This is a description.</p>
      <style>
        {`
          .info-title {
            color: #2c3e50;
            font-size: 28px;
          }
          .info-description {
            color: #7f8c8d;
            font-size: 18px;
          }
        `}
      </style>
    </>
  );
}

function App() {
  return (
    <>
      <Info />
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }
        `}
      </style>
    </>
  );
}

export default App;
