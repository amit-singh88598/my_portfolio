import { Grid, IconButton, makeStyles } from "@material-ui/core";
import { Call, GitHub, LinkedIn } from "@material-ui/icons";
import Mail from "@material-ui/icons/Mail";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  btn: {
    color: "#fff",
    marginTop: 20,
  },
}));

function SocialMedia(props) {
  const classes = useStyle();
  return (
    <div style={{ display: "flex" }}>
      <Grid container spacing={1}>
        <Grid item xs={2} sm={2}>
          <a href="https://github.com/amit-singh88598">
            <IconButton className={classes.btn}>
              <GitHub />
            </IconButton>
          </a>
          {/* </Link> */}
        </Grid>
        <Grid item xs={2} sm={2}>
          <a href="linkedin.com/in/amit-singh-71755b159">
            <IconButton className={classes.btn}>
              <LinkedIn />
            </IconButton>
          </a>
        </Grid>
        <Grid item xs={2} sm={2}>
          <a href="tel:7300689054" className={classes.anchor}>
            <IconButton className={classes.btn}>
              <Call />
            </IconButton>
          </a>
        </Grid>
        <Grid item xs={2} sm={2}>
          <a href="mailto:amitsingh992728@gmail.com">
            <IconButton className={classes.btn}>
              <Mail />
            </IconButton>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default SocialMedia;
