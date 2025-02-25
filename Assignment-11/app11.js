import React from "react";

const users = ["Alice", "Bob", "Charlie"];

function UserList() {
  return (
    <ul className="user-list">
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="container">
      <UserList />
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-family: Arial, sans-serif;
          }
          .user-list {
            list-style-type: none;
            padding: 0;
          }
          .user-list li {
            background-color: #f0f0f0;
            padding: 10px 15px;
            margin: 5px 0;
            width: 200px;
            text-align: center;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  );
}

export default App;
