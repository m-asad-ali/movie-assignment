import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';

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
            <Typography variant="body1">{movie.description}</Typography>
            {/* Add more details as needed */}
        </div>
    );
};

export default MovieDetail;
