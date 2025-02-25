import React from "react";

function App() {
  const isLoggedIn = false;

  return <h1>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h1>;
}

export default App;
