import Grid from "@mui/material/Unstable_Grid2/";
import PreviewImage from "./PreviewImage";
import { useEffect } from "react";
import { removeSingleImage } from "@/redux/features/createPostSlice";
import { useDispatch } from "react-redux";

export default function PreviewImageList({ images, setImages }) {
  const dispatch = useDispatch();
  const handleRemoveImage = (id) => {
    setImages((prev) => prev.filter((image) => image.id !== id));
    dispatch(removeSingleImage(id));
  };

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      images.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  });

  return (
    <Grid container columns={2} spacing={2}>
      {images.map((image, index) => (
        <Grid key={image.id} md={index == 0 ? 2 : 1} xs={2}>
          <PreviewImage
            image={image}
            onRemove={() => handleRemoveImage(image.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
}
