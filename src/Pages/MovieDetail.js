import React from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Card, CardContent, Typography, CardMedia, CardActions, Button } from '@material-ui/core';
import img1 from "../assets/images/img1.jpg"


const movies = [
    { id: 1, title: 'Movie 1', description: 'Description 1' },
    { id: 2, title: 'Movie 2', description: 'Description 2' },
    // Add more movies as needed
];

const MovieDetail = () => {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id, 10));

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div>
            <Typography variant="h4">{movie.title}</Typography>
            <Card style={{ height: '100%' }}>
                <CardMedia
                    style={{ height: 100 }}
                    image={img1}
                    title="Movie Image"
                />
                <CardContent>
                    <Typography variant="h6" component="div" style={{ height: 60, overflow: 'hidden' }}>
                        {movie.title}
                    </Typography>
                    <Typography variant="body2" component="div" style={{ height: 80, overflow: 'hidden' }}>
                        {movie.description}
                    </Typography>

                </CardContent>
            </Card>
            {/* Add more details as needed */}
        </div>
    );
};

export default MovieDetail;
