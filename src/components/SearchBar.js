import React from "react";
import { Box, TextField, InputAdornment, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ query, setQuery, error, onSubmit }) => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "2rem",
        width: "100%",
      }}
    >
      <TextField
        error={error}
        helperText={error ? "Please input the text" : ""}
        inputProps={{
          style: {
            height: "1rem",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon style={{ color: `${error ? "crimson" : "grey"}` }} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
        sx={{
          "& fieldset": {
            borderRadius: "25px",
          },
          marginRight: "1rem",
          maxWidth: "32rem",
          width: "100%",
        }}
        value={query}
        onChange={(newValue) => setQuery(newValue.target.value)}
      />
      <Button
        variant="contained"
        style={{ width: "6rem", height: "3rem", borderRadius: "2rem" }}
        onClick={onSubmit}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
