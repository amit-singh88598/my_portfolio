import {
  Card,
  CardMedia,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const useStyle = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#022C43",
    paddingBottom: 40,
  },
  media: {
    height: 200,
    width: 200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      height: 150,
      width: 150,
    },
  },
  heading: {
    textAlign: "center",
    fontSize: "4em",
    fontFamily: "-moz-initial",
    color: "#fff",
    paddingTop: 60,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 40,
    },
  },
  flex: {
    display: "flex",
    justifyContent: "center",
  },
}));

const SkillImages = [
  {
    img: "/html.png",
  },
  {
    img: "/css.png",
  },
  {
    img: "/javascript.png",
  },
  {
    img: "/react.png",
  },
  {
    img: "/nextjs.png",
  },
  {
    img: "/redux.png",
  },
  {
    img: "/materialui.png",
  },
  {
    img: "/npm1.png",
  },
  {
    img: "/github.png",
  },
];

const handleDragStart = (e) => e.preventDefault();

const items = [
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img
        alt="html"
        src="/html.png"
        style={{ height: 230, width: 360, paddingTop: 15 }}
      />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img alt="html" src="/css.png" style={{ height: 250, width: 360 }} />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img
        alt="html"
        src="/javascript.png"
        style={{ height: 250, width: 360 }}
      />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img alt="html" src="/react.png" style={{ height: 250, width: 360 }} />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img alt="html" src="/nextjs.png" style={{ height: 250, width: 360 }} />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img alt="html" src="/redux.png" style={{ height: 250, width: 360 }} />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img
        alt="html"
        src="/materialui.png"
        style={{ height: 250, width: 360 }}
      />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img alt="html" src="/npm2.png" style={{ height: 250, width: 360 }} />
    </Card>
  </Card>,
  <Card
    elevation={0}
    onDragStart={handleDragStart}
    style={{
      width: 360,
      padding: 10,
      backgroundColor: "#CF6766",
    }}
  >
    <Card style={{ borderRadius: 15, height: 250 }} elevation={2}>
      <img alt="html" src="/github.png" style={{ height: 250, width: 360 }} />
    </Card>
  </Card>,
];

function Skills(props) {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Typography className={classes.heading}>Skills</Typography>
      <hr
        style={{
          width: 150,
          height: 2,
          backgroundColor: "#fff",
          marginBottom: 60,
        }}
      />
      {/* <Grid container spacing={0}>
        {SkillImages.map((item, index) => (
          <Grid item xs={6} sm={4} key={index} className={classes.flex}>
            <CardMedia
              className={classes.media}
              image={item.img}
              title="Contemplative Reptile"
            />
          </Grid>
        ))}
      </Grid> */}
      <AliceCarousel
        mouseTracking
        items={items}
        animationDuration={5000}
        autoPlay={true}
        autoHeight={true}
        autoWidth={true}
        disableButtonsControls={true}
        infinite={true}
        disableDotsControls={true}
      />
    </div>
  );
}

export default Skills;
