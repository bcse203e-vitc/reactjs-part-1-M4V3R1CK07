import React from "react";

function App() {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const name = "Aditya";

  return (
    <div>
      <h1>
        {greeting}, {name}!
      </h1>
      <p>The current time is {new Date().toLocaleTimeString()}.</p>
    </div>
  );
}

export default App;
