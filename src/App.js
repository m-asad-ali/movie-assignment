import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_MOVIES } from "./GraphQL/Queries";

import Box from "./Components/box";
import List from "./Pages/List";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_MOVIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  if (data) console.log(data.allFilms.films);

  return (
    <>
      <Box />
      <List movies={data.allFilms.films} />
    </>
  );
}

export default App;
