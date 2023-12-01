/* eslint-disable no-unused-vars */
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
import { MovieContext } from "../App";

const List = () => {
  const dataObj = useContext(MovieContext);
  console.log("🚀 ~ file: List.js:16 ~ List ~ dataObj:", dataObj.movie);

  return (
    <>
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "2.5%", paddingRight: "2.5%" }}
      >
        {dataObj.movie.films.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={3} lg={3}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
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
        ))}
      </Grid>
    </>
  );
};

export default List;
