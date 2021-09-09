import { CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  media: {
    height: 200,
    width: 200,
    marginTop: 40,
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

function Skills(props) {
  const classes = useStyle();
  return (
    <div style={{ backgroundColor: "#022C43" }}>
      <Typography
        style={{
          textAlign: "center",
          paddingTop: 60,
          fontSize: "4em",
          fontFamily: "-moz-initial",
          color: "#fff",
          paddingBottom: 40,
        }}
      >
        Skills
      </Typography>
      <Grid container spacing={0}>
        {SkillImages.map((item, index) => (
          <Grid item xs={6} sm={4} key={index} className={classes.flex}>
            <CardMedia
              className={classes.media}
              image={item.img}
              title="Contemplative Reptile"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Skills;
