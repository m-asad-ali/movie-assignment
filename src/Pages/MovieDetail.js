/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";
import img1 from "../assets/images/img1.jpg";

const movies = [
  {
    id: 1,
    title: "Movie 1",
    description:
      "Pathaan (pronounced [pəʈʰaːn]) is a 2023 Indian Hindi-language action thriller film co-written and directed by Siddharth Anand and produced by Aditya Chopra under Yash Raj Films. The fourth installment in the YRF Spy Universe, it stars Shah Rukh Khan in the title role, alongside Deepika Padukone and John Abraham, with Dimple Kapadia and Ashutosh Rana in supporting roles. Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a former RAW agent, who plans to attack India with a deadly virus. Principal photography commenced in November 2020 in Mumbai.The film was shot in various locations in India, Afghanistan, Spain, UAE, Turkey, Russia, Italy and France.The songs in the film were composed by Vishal–Shekhar, while Sanchit Balhara and Ankit Balhara provided the score.The film was made on an estimated production budget of ₹225 crore(US$28 million) with a further ₹15 crore(US$1.9 million) spent on print and advertising.[4] Against the norm, pre- release publicity was limited with no media interaction or public events. Pathaan was theatrically released in India on 25 January 2023, coinciding with the Republic Day weekend.The film received mixed reviews from critics. [6][7] The film set several box office records for a Hindi film, including the highest opening day, highest single day, highest opening weekend and highest opening week for a Hindi film in India.[8][9][10][11][12][13][14] It eventually emerged as the highest - grossing Hindi film of all time in India and set records in all major overseas markets.[15][16][17] Pathaan grossed ₹1,050.30 crore(US$130 million)[18] worldwide, becoming the second highest - grossing Indian film of 2023(highest before being surpassed by Khan's next release Jawan), the third - highest - grossing Hindi film of all time, and the sixth - highest - grossing Indian film of all time.[19] ",
  },
  { id: 2, title: "Movie 2", description: "Description 2" },
  // Add more movies as needed
];

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id, 10));

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

      {/* <Grid item xs={12} md={8}>
        <img
          src={img1}
          alt="Movie"
          style={{
            width: "100%",
            maxHeight: "40vh",
            objectFit: "cover",
            display: "none",
          }}
        />
      </Grid> */}
    </Grid>
  );
};

export default MovieDetail;

// return (
//     <div>
//         <Typography variant="h4">{movie.title}</Typography>
//         <Card style={{ height: '100%' }}>
//             <CardMedia
//                 style={{ height: 100 }}
//                 image={img1}
//                 title="Movie Image"
//             />
//             <CardContent>
//                 <Typography variant="h6" component="div" style={{ height: 60, overflow: 'hidden' }}>
//                     {movie.title}
//                 </Typography>
//                 <Typography variant="body2" component="div" style={{ height: 80, overflow: 'hidden' }}>
//                     {movie.description}
//                 </Typography>

//             </CardContent>
//         </Card>
//         {/* Add more details as needed */}
//     </div>
// );

// return (
//     <Container style={{ marginTop: '20px' }}>
//         <Grid container spacing={3}>
//             <Grid item xs={12} sm={6} >
//                 <Card style={{ height: '40vh', display: 'flex', flexDirection: 'column' }}>
//                     <CardContent style={{ flex: 1 }}>
//                         <Typography variant="h4">{movie.title}</Typography>
//                         <Typography variant="body1">{movie.description}</Typography>
//                     </CardContent>
//                 </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} >
//                 <Card style={{ height: '40vh', display: 'flex', flexDirection: 'column' }}>
//                     <CardMedia
//                         style={{ flex: 1 }}
//                         image={movie.image}
//                         title="Movie Image"
//                     />
//                 </Card>
//             </Grid>
//         </Grid>
//     </Container>
