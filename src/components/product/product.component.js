import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardMedia } from "@material-ui/core";

import "./product.styles.scss";

export default function Product(props) {
  return (
    <Card className="product">
      <CardMedia component="img" image={props.productImage} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.productTitle}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.productDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}
