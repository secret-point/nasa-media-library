import React, { useState, useEffect, Suspense } from "react";
import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";
import YearInput from "../components/YearInput";
import { getSearchedImages } from "../redux/actions";
import Loader from "../components/Loader";

const SearchList = React.lazy(() => import("../components/SearchList"));

const SearchScreen = () => {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.searchedImagesReducer);
  const [query, setQuery] = useState("");
  const [startYear, setStartYear] = useState(null);
  const [endYear, setEndYear] = useState(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (query) {
      setIsEmpty(false);
      setError(false);
    } else {
      setIsEmpty(true);
    }
  }, [query]);

  const onSubmit = () => {
    if (isEmpty) {
      setError(true);
      return;
    }
    dispatch(getSearchedImages(query, startYear?.$y, endYear?.$y));
  };

  if (!!imageData.error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography component="p" variant="h5" sx={{ color: "red" }} mt={20}>
          {imageData.error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "4rem",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography component="h3" variant="h3" mb={4}>
        NASA Media Library
      </Typography>
      <SearchBar
        query={query}
        setQuery={setQuery}
        error={error}
        onSubmit={onSubmit}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "4rem",
        }}
      >
        <YearInput year={startYear} setYear={setStartYear} label="Start Year" />
        <YearInput year={endYear} setYear={setEndYear} label="End Year" />
      </Box>
      {imageData.loading ? (
        <Loader />
      ) : !!imageData.searchedImages?.collection?.items.length ? (
        <Box>
          {imageData.searchedImages?.collection?.items.map((item, index) => (
            <SearchList
              key={item.data[0].nasa_id}
              imageUrl={item.links[0].href}
              title={item.data[0].title}
              location={item.data[0].location}
              photographer={item.data[0].photographer}
              index={index}
            />
          ))}
        </Box>
      ) : (
        <Typography component="p" variant="h5" mt={20}>
          No Result!
        </Typography>
      )}
    </Box>
  );
};

export default SearchScreen;
