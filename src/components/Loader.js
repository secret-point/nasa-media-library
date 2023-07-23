import React from "react";
import { CircularProgress, Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      mt={30}
    >
      <CircularProgress size={80} />
    </Box>
  );
};

export default Loader;
