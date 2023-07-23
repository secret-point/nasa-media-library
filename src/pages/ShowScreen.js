import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";

const ShowScreen = () => {
  const location = useLocation();
  const [detail, setDetail] = useState();
  const imageData = useSelector((state) => state.searchedImagesReducer);
  const navigate = useNavigate();

  useEffect(() => {
    setDetail(
      imageData.searchedImages?.collection?.items[location.state.index]
    );
  }, [imageData, location.state?.index]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }} mt={5}>
      <Card sx={{ maxWidth: 1200, width: "100%" }}>
        <CardMedia
          component="img"
          alt={detail?.data[0]?.nasa_id}
          height="600"
          image={detail?.links[0]?.href}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {detail?.data[0]?.title}
          </Typography>
          {detail?.data[0].location && (
            <Typography variant="body2" color="text.secondary">
              <strong>Location: </strong> {detail?.data[0]?.location}
            </Typography>
          )}
          {detail?.data[0].photographer && (
            <Typography variant="body2" color="text.secondary">
              <strong>Photographer: </strong> {detail?.data[0]?.photographer}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            <strong>Description: </strong>
            {detail?.data[0]?.description || detail?.data[0]?.description_508}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Keywords</strong>: {detail?.data[0]?.keywords?.join(", ")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Date: </strong>{" "}
            {new Date(detail?.data[0]?.date_created).toLocaleDateString(
              "en-CA"
            )}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "revert",
            textAlign: "right",
          }}
        >
          <Button size="small" onClick={() => navigate("/")}>
            go back
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ShowScreen;
