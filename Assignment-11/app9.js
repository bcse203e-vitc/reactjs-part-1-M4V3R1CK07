import React, { useState, useEffect } from "react";

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <h2 className="time-display">
      Current Time: {currentTime.toLocaleTimeString()}
    </h2>
  );
}

function App() {
  return (
    <div className="container">
      <CurrentTime />
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-family: Arial, sans-serif;
          }
          .time-display {
            color: #333;
            font-size: 24px;
            background: #f4f4f4;
            padding: 15px 20px;
            border-radius: 8px;
          }
        `}
      </style>
    </div>
  );
}

export default App;
