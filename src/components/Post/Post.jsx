"use client";
import React from "react";
import styled from "@emotion/styled";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { BaseContainer } from "@components/BaseComponents";
import { Style } from "@mui/icons-material";

const StyledBox = styled(Box)`
  height: 100px;
  .card_container {
    height: 300px;
  }
`;

function Post({ post, key }) {
  return (
    <StyledBox key={key}>
      <Card sx={{ maxWidth: 345 }} className="card_container">
        <CardMedia
          sx={{ height: 200 }}
          image={post.thumbnail}
          title={post.name}
          className="card_media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </StyledBox>
  );
}

export default Post;
