/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import img1 from "../assets/images/img1.jpg";
import { MovieContext } from "../App";

const MovieDetail = () => {
  const moviesData = useContext(MovieContext);
  console.log("In Details", moviesData);

  const { id } = useParams();
  const movie = moviesData?.films.find((m) => m.id === parseInt(id, 10));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <Grid
      container
      spacing={3}
      style={{ marginTop: 50, paddingLeft: "2.5%", paddingRight: "2.5%" }}
    >
      <Grid item xs={12} md={6}>
        <img
          src={img1}
          alt="Movie"
          style={{ width: "100%", maxHeight: "90%", objectFit: "cover" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {movie.description}
        </Typography>
        <Button variant="contained" color="primary">
          Watch Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
