import React from "react";
import Profile from "../Components/profile";
import Skills from "../Components/skills";
import Header from "../Layouts/header";

function Home(props) {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#022C43" }}>
        <Profile />
        <Skills />
      </div>
    </div>
  );
}

export default Home;
