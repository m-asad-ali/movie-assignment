/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MOVIES } from "./GraphQL/Queries";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import MovieDetail from "./Pages/MovieDetail";

export const MovieContext = createContext();

function App() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  // if (data) console.log(data.allFilms.films);

  return (
    <>
      <MovieContext.Provider value={data.allFilms}>
        {/* <Box /> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </Router>
      </MovieContext.Provider>
    </>
  );
}

export default App;
