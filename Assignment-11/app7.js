import React from "react";

function App() {
  const myStyle = { color: "blue", fontSize: "20px" };

  return (
    <div>
      <h1 style={myStyle}>Styled Heading</h1>
      <style>
        {`
          .internal-css {
            background-color: lightgray;
            padding: 10px;
          }
        `}
      </style>
      <p className="internal-css">This paragraph uses internal CSS.</p>
    </div>
  );
}

export default App;
