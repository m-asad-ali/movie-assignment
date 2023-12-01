import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@material-ui/core";
import img1 from "../assets/images/img1.jpg";
import NoImgFound from "../assets/images/NoImgFound.jpg";
import { MovieContext } from "../App";

const List = () => {
  const { data, searchTerm } = useContext(MovieContext);
  let filteredMovies = [];

  if (searchTerm !== "") {
    filteredMovies = data.allFilms?.films?.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredMovies = [];
  }

  return (
    <>
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "2.5%", paddingRight: "2.5%" }}
      >
        {searchTerm === "" ? (
          data.allFilms.films.map((movie) => (
            <Grid item key={movie.id} xs={6} sm={4} md={3} lg={3}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ height: "100%", width: "100%" }}>
                  <CardMedia style={{ height: 300 }} image={img1} />
                  <CardContent style={{ backgroundColor: "#FAF6F0" }}>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ height: 30, overflow: "hidden" }}
                    >
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        ) : filteredMovies.length !== 0 ? (
          filteredMovies.map((movie) => (
            <Grid item key={movie.id} xs={6} sm={4} md={3} lg={3}>
              <Link
                to={`/movie/${movie.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ height: "100%", width: "100%" }}>
                  <CardMedia style={{ height: 300 }} image={img1} />
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ height: 30, overflow: "hidden" }}
                    >
                      {movie.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" gutterBottom>
            NO MOVIE FOUND
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default List;
