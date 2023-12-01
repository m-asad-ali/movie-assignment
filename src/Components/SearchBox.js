/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {
  InputAdornment,
  InputBase,
  makeStyles,
  Paper,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { MovieContext } from "../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  searchPaper: {
    width: "40%",
    padding: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    borderRadius: theme.spacing(2),
  },
  input: {
    flex: 1,
  },
}));

const SearchBar = () => {
  const classes = useStyles();
  const { setSearchTerm } = useContext(MovieContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // console.log("Search Value:", searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.searchPaper} elevation={3}>
        <InputBase
          className={classes.input}
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Paper>
    </div>
  );
};

export default SearchBar;
