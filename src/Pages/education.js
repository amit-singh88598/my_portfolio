import React from "react";
import MyEducation from "../Components/myEducation";
import Header from "../Layouts/header";

function Education(props) {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#CF6766" }}>
        <MyEducation />
      </div>
    </div>
  );
}

export default Education;
