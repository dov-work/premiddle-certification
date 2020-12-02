import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const BeerItem = ({ beer }) => {
  const classes = makeStyles({
    root: {
      maxWidth: 345,
      margin: 30,
    },
    media: {
      height: 200,
      width: "auto",
      margin: "0 auto",
    },
    descr: {
      maxHeight: 100,
      overflow: "hidden",
    },
  })();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={beer.image_url}
          component="img"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {beer.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
            Description:
          </Typography>
          <Typography
            className={classes.descr}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {beer.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BeerItem;
