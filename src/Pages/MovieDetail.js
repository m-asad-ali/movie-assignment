import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import img1 from "../assets/images/img1.jpg";
import NoImgFound from "../assets/images/NoImgFound.jpg";

import { MovieContext } from "../App";

const MovieDetail = () => {
  const { data } = useContext(MovieContext);
  // console.log("In Details", dataObj.films);

  const { id } = useParams();
  const movie = data.allFilms?.films.find((m) => m.id === id);

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
          style={{ width: "60%", maxHeight: "100%", objectFit: "cover" }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body1" paragraph>
          {movie.openingCrawl}
        </Typography>

        <Typography variant="body1" paragraph>
          <b>Release Date: </b> {movie.releaseDate}
        </Typography>

        <Typography variant="body1" paragraph>
          <b>Director: </b> {movie.director}
        </Typography>

        <Typography variant="body1" paragraph>
          <b>Characters Names: </b>
          {movie.characterConnection.characters.map((obj) => `${obj.name}, `)}
        </Typography>

        <Typography variant="body1" paragraph>
          <b>Producer Names: </b>
          {movie.producers.map((obj) => `${obj}, `)}
        </Typography>
        <Button variant="contained" color="primary">
          Watch Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
