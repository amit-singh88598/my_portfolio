import { Typography } from "@material-ui/core";
import React from "react";
import Profile from "../Components/profile";
import Header from "../Layouts/header";

function Home(props) {
  return (
    <div>
      <Header />
      <Profile />
    </div>
  );
}

export default Home;
