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
import Box from "../Components/box";

const List = () => {
  const moviesData = useContext(MovieContext);
  console.log("In List", moviesData);

  return (
    <>
      <Box />
      <Grid
        container
        spacing={3}
        style={{ paddingLeft: "2.5%", paddingRight: "2.5%" }}
      >
        {moviesData.films.map((movie) => (
          <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
              <Card style={{ height: "100%", width: "100%" }}>
                <CardMedia
                  style={{ height: 300 }}
                  image={img1}
                  title="Movie Image"
                />
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

// const _movies = [
//   { id: 1, title: "Movie 1", description: "Description 1" },
//   {
//     id: 2,
//     title: "Movie 2",
//     description:
//       "Description j;akjdfakjdf ajdkfjdfaj;dlkfjla;djf fkajdsf;lkjasd;lkfja djkladjflkjda s",
//   },
//   {
//     id: 3,
//     title: "Movie 3",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfhjajdfkajdf;ja",
//   },
//   {
//     id: 4,
//     title: "Movie 4",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh",
//   },
//   {
//     id: 5,
//     title: "Movie 5",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh",
//   },
//   {
//     id: 6,
//     title: "Movie 6",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh",
//   },
//   {
//     id: 6,
//     title: "Movie 6",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh",
//   },
//   {
//     id: 6,
//     title: "Movie 6",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh",
//   },
//   {
//     id: 6,
//     title: "Movie 6",
//     description:
//       "k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh",
//   },
//   { id: 6, title: "Movie 6", description: "Description 2" },
//   { id: 6, title: "Movie 6", description: "Description 2" },
//   { id: 6, title: "Movie 6", description: "Description 2" },
//   { id: 6, title: "Movie 6", description: "Description 2" },
//   { id: 6, title: "Movie 6", description: "Description 2" },
// ];
