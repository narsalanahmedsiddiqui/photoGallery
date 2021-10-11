import React, { Component } from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import MyReactImageMagnify from "./MyReactImageMagnify";
import MyImageGallery from "./MyImageGallery";

class App extends Component {
  render() {
    return (
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <MyReactImageMagnify />
          <MyImageGallery />
        </Grid>
        <Grid container spacing={2} item xs={6} direction="column">
          <Grid item>
            <Paper>bla blah</Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
