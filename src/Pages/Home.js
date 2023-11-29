import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const movies = [
    { id: 1, title: 'Movie 1', description: 'Description 1' },
    { id: 2, title: 'Movie 2', description: 'Description 2' },
    { id: 3, title: 'Movie 3', description: 'Description 2' },
    { id: 4, title: 'Movie 4', description: 'Description 2' },
    // Add more movies as needed
];

const Home = () => {
    return (
        <Grid container spacing={3}>
            {movies.map((movie) => (
                <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{movie.title}</Typography>
                            <Typography variant="body2">{movie.description}</Typography>
                            <Link to={`/movie/${movie.id}`}>Details</Link>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Home;
