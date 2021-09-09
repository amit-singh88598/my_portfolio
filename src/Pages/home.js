import React from "react";
import Profile from "../Components/profile";
import Skills from "../Components/skills";
import Header from "../Layouts/header";

function Home(props) {
  return (
    <div>
      <Header />
      <Profile />
      <Skills />
    </div>
  );
}

export default Home;
