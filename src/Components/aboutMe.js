import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: 120,
  },
  heading: {
    fontSize: "3em",
    textAlign: "center",
    fontFamily: "-moz-initial",
  },
}));

function AboutMe(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>About Me</Typography>
    </div>
  );
}

export default AboutMe;
