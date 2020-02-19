import React from "react";
import Content from "./Components/Content/Content";
import Profile from "./Components/Profile/Profile";
import "./App.css";
import data from "./data";

//create the profile component. this will have your profile, contact infor and your skilss

function App() {
  return (
    <div className="git">
      <div className="sidebar">
        <Profile icons={data.profileIcons} />
      </div>
      <div className="main">
        <Content data={data} />
      </div>
    </div>
  );
}

export default App;
