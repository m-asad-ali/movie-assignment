import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';
import img1 from "../assets/images/img1.jpg"

const movies = [
    { id: 1, title: 'Movie 1', description: 'Description 1' },
    { id: 2, title: 'Movie 2', description: 'Description j;akjdfakjdf ajdkfjdfaj;dlkfjla;djf fkajdsf;lkjasd;lkfja djkladjflkjda s' },
    { id: 3, title: 'Movie 3', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfhjajdfkajdf;ja' },
    { id: 4, title: 'Movie 4', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh' },
    { id: 5, title: 'Movie 5', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh' },
    { id: 6, title: 'Movie 6', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh' },
    { id: 6, title: 'Movie 6', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh' },
    { id: 6, title: 'Movie 6', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh' },
    { id: 6, title: 'Movie 6', description: 'k;adjsf;akdf;jadfha;jdfhajkdshfkadhvdsgghs;fdha;dfj ahdljhfajsdfh' },
    { id: 6, title: 'Movie 6', description: 'Description 2' },
    { id: 6, title: 'Movie 6', description: 'Description 2' },
    { id: 6, title: 'Movie 6', description: 'Description 2' },
    { id: 6, title: 'Movie 6', description: 'Description 2' },
    { id: 6, title: 'Movie 6', description: 'Description 2' },
];

const List = () => {
    return (
        <Grid container spacing={3} style={{ padding: 30 }}>
            {movies.map((movie) => (
                <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
                    <Card style={{ height: '100%', width: '100%' }}>
                        <CardMedia
                            style={{ height: 300 }}
                            image={img1}
                            title="Movie Image"
                        />
                        <CardContent>
                            <Typography variant="h6" component="div" style={{ height: 60, overflow: 'hidden' }}>
                                {movie.title}
                            </Typography>
                            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                <Button size="small" variant="contained" color="primary">
                                    Details
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default List;
