/* eslint-disable no-unused-vars */
import React, { createContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MOVIES } from "./GraphQL/Queries";

import Box from "./Components/box";
import List from "./Pages/List";
import MovieDetail from "./Pages/MovieDetail";

export const MovieContext = createContext();

function App() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data.allFilms.films);

  const show = false;

  return (
    <>
      <MovieContext.Provider value={data.allFilms}>
        <Box />
        <List />

        {/* {show && <MovieDetail />} */}
      </MovieContext.Provider>
    </>
  );
}

export default App;
