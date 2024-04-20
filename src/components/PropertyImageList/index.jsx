import { PlusOneOutlined, RemoveCircleOutline } from "@mui/icons-material";
import {
  ImageList,
  ImageListItem,
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/";
import Image from "next/image";

function PropertyImage({ url, alt }) {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        aspectRatio: 3 / 2,
        border: "1px solid black",
      }}
    >
      <Image fill={true} src={url} alt={alt} objectFit="contain" />
      <IconButton aria-label="remove" onClick={() => alert("Remove")}>
        <RemoveCircleOutline />
      </IconButton>
    </Box>
  );
}

export default function PropertyImageList({ imageUrls, max = 5 }) {
  const onRemoveImage = (e) => {
    e.stopPropagation();
    alert("Remove");
  };

  return (
    <Grid container columns={2}>
      {imageUrls.map((imageUrl, index) => (
        <Grid xs={index == 0 ? 2 : 1}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              aspectRatio: 3 / 2,
              border: "1px solid black",
            }}
          >
            <Image
              fill={true}
              src={imageUrl}
              alt={`The property image ${index + 1}`}
              objectFit="contain"
            />
            <IconButton aria-label="remove" onClick={onRemoveImage}>
              <RemoveCircleOutline />
            </IconButton>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
