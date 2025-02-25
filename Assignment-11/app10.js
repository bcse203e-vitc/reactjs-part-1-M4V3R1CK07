import React from "react";

function ProfilePicture() {
  return (
    <img
      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      alt="Profile"
      className="profile-img"
    />
  );
}

function App() {
  return (
    <div className="container">
      <ProfilePicture />
      <style>
        {`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 50px;
            font-family: Arial, sans-serif;
          }
          .profile-img {
            border-radius: 50%;
            border: 3px solid #007BFF;
            width: 150px;
            height: 150px;
          }
        `}
      </style>
    </div>
  );
}

export default App;
