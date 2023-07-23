import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
} from "@mui/material";

const SearchList = ({ imageUrl, title, location, photographer, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/showDetails", { state: { index: index } });
  };

  return (
    <Card sx={{ maxWidth: 620, width: "100%", marginTop: "2rem" }}>
      <CardMedia component="img" height="160" image={imageUrl} alt="APOLLO" />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {location && (
            <Typography variant="body2" color="text.secondary">
              Location: {location}
            </Typography>
          )}
          {photographer && (
            <Typography variant="body2" color="text.secondary">
              Photographer: {photographer}
            </Typography>
          )}
        </Box>
      </CardContent>
      <CardActions
        sx={{
          display: "revert",
          textAlign: "right",
        }}
      >
        <Button size="small" onClick={handleClick}>
          more detail
        </Button>
      </CardActions>
    </Card>
  );
};

export default SearchList;
