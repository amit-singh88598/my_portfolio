import {
  Avatar,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import SocialMedia from "./socialMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 40,
    backgroundColor: "#022C43",
  },
  image: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  large: {
    width: theme.spacing(40),
    height: theme.spacing(40),
    [theme.breakpoints.down("sm")]: {
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  gridRoot: {
    color: "#fff",
  },
  text1: {
    fontFamily: "cursive",
    fontSize: "1.8em",
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  text2: {
    fontFamily: "cursive",
    fontSize: "1.8em",
    marginTop: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  text3: {
    fontFamily: "cursive",
    fontSize: "2em",
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "bold",
    letterSpacing: 3,
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 1,
      fontSize: "1.6em",
    },
  },
  text4: {
    fontFamily: "cursive",
    fontSize: "4em",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.6em",
      marginTop: 0,
    },
  },
  skills: {
    marginRight: 15,
    marginTop: 20,
    color: "#8D8D8D",
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
  },
  flex: {
    display: "flex",
  },
}));

function Profile(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div className={classes.image}>
              <Avatar
                alt="Remy Sharp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbQvowIqss8KDb8fH2YcQ2JLKdwQBI16CcQ&usqp=CAU"
                className={classes.large}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridRoot}>
            <Typography className={classes.text1}>Hi,</Typography>
            <div className={classes.flex}>
              <Typography className={classes.text2}>I'm</Typography>
              <Typography className={classes.text3}>AMIT SINGH</Typography>
            </div>
            <Typography className={classes.text4}>Web Developer.</Typography>
            <div className={classes.flex}>
              <Typography className={classes.skills}>
                Reactjs Developer /
              </Typography>
              <Typography className={classes.skills}>
                Frontend Developer /
              </Typography>
              <Typography className={classes.skills}>Freelancer</Typography>
            </div>
            <SocialMedia />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Profile;
