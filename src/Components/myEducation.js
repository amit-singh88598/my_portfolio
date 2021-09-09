import {
  Card,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    paddingTop: 120,
  },
  heading: {
    fontSize: "3em",
    textAlign: "center",
    fontFamily: "-moz-initial",
    color: "#fff",
  },
  media: {
    height: 200,
    width: "100%",
  },
  cardStyle: {
    marginTop: 40,
    borderRadius: 20,
    backgroundColor: "#fafafa",
  },
  text1: {
    fontSize: "2em",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.4em",
    },
  },
  text2: {
    marginTop: 20,
    fontSize: "1.4em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
      marginTop: 10,
    },
  },
  text3: {
    fontSize: "1.2em",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
      marginTop: 10,
    },
  },
  text4: {
    fontSize: "0.9em",
    marginTop: 8,
    marginLeft: 10,
    color: "#808080",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: 5,
    },
  },
  flex: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const Education = [
  {
    img: "/dbit.jpg",
    name: " Dev Bhoomi Institute Of Technology",
    session: "2016 - 2020",
    course: " Bachelor of Technology",
    branch: "Computer Science and Engineering (CSE)",
  },
  {
    img: "/gmps.jpg",
    name: "Great Mission School, Ramnagar",
    session: "2015 - 2016",
    course: "Intermediate",
  },
  {
    img: "/gmps.jpg",
    name: "Great Mission School, Ramnagar",
    session: "2013 - 2014",
    course: "High-School",
  },
];

function MyEducation(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.heading}>My Education</Typography>
        {Education.map((item, index) => (
          <Card elevation={3} className={classes.cardStyle}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={3}>
                <CardMedia
                  className={classes.media}
                  image={item.img}
                  title="Contemplative Reptile"
                />
              </Grid>
              <Grid item xs={12} sm={9}>
                <div style={{ padding: 10 }}>
                  <Typography className={classes.text1}>{item.name}</Typography>
                  <Typography className={classes.text2}>
                    {item.session}
                  </Typography>
                  <div className={classes.flex}>
                    <Typography className={classes.text3}>
                      {item.course}
                    </Typography>
                    <Typography className={classes.text4}>
                      {item.branch}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>
    </div>
  );
}

export default MyEducation;
