import React, { useState } from "react";
import {
  InputAdornment,
  InputBase,
  makeStyles,
  Paper,
  IconButton,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

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
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Handle the search functionality or store the value in the state as needed
    console.log("Search Value:", searchValue);
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
