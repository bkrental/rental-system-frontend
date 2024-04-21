import { addImages, addSingleImage } from "@/redux/features/createPostSlice";
import { DeleteOutline } from "@mui/icons-material";
import { Box, IconButton, styled } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoadingOverlay from "./LoadingOverlay";

const ImageWrapper = styled(Box)(() => ({
  position: "relative",
  aspectRatio: 3 / 2,
  border: "1px solid black",
  borderRadius: "10px",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

export default function PreviewImage({ image, onRemove }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function uploadImage() {
      if (image.uploaded) return;

      const formData = new FormData();
      formData.append("file", image.data);

      setLoading(true);
      const response = await fetch("http://localhost:5002/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      console.log(data);

      dispatch(addSingleImage({ id: image.id, url: data.url, uploaded: true }));
      setLoading(false);
    }

    uploadImage();
  }, [image]);

  return (
    <ImageWrapper>
      <Image
        src={image.url}
        fill
        alt="Preview Image"
        style={{ objectFit: "contain" }}
        sizes="400px"
        onLoad={() => {
          !image.uploaded && URL.revokeObjectURL(image.preview);
        }}
      />
      <IconButton
        color="error"
        aria-label="remove"
        onClick={onRemove}
        size="large"
        sx={{ position: "absolute", top: 5, right: 5 }}
      >
        <DeleteOutline />
      </IconButton>
      {loading && <LoadingOverlay />}
    </ImageWrapper>
  );
}
