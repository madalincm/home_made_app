import React from "react";
import Typography from "@material-ui/core/Typography";

import "./title.styles.scss";

export default function Title(props) {
  return (
    <div>
      <Typography className="title" variant="h1" component="h1">
        {props.text}
      </Typography>
    </div>
  );
}
