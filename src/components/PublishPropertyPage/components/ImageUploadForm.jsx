"use client";
import PropertyImageList from "@/components/PropertyImageList";
import {
  AddAPhotoOutlined,
  CloudUploadOutlined,
  DeleteOutline,
  PhotoAlbumOutlined,
  PhotoLibraryOutlined,
  RemoveCircleOutline,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  styled,
  Typography,
  IconButton,
  Collapse,
} from "@mui/material";
import { green, grey, orange } from "@mui/material/colors";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { TransitionGroup } from "react-transition-group";
import Grid from "@mui/material/Unstable_Grid2/";

const DropZoneContainer = styled(Stack)(() => {
  return {
    height: "400px",
    justifyContent: "center",
    alignItems: "center",
    border: "1px dashed black",
    borderRadius: 2,
    p: 4,
  };
});

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

const Overlay = styled(Stack)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(190, 190, 190, 0.5)",
  borderRadius: "10px",
  alignItems: "center",
  paddingTop: "100px",
}));

export default function ImageUploadForm() {
  const [loading, setLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);
    setSelectedImages((prev) => [...prev, ...acceptedFiles]);

    setLoading(true);
    // fetch("http://localhost:5002/api/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data))
    //   .finally(() => setLoading(false));
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  const removeImage = (e, index) => {
    e.stopPropagation();
    setSelectedImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <Box {...getRootProps()}>
        <input {...getInputProps()} />

        <Box sx={{ position: "relative" }}>
          {selectedImages.length > 0 ? (
            // <PropertyImageList imageUrls={imageUrls} />
            <Grid container columns={2} spacing={2}>
              {selectedImages.map((image, index) => (
                <Grid xs={index == 0 ? 2 : 1} key={image.path + index}>
                  <ImageWrapper>
                    <Image
                      fill={true}
                      src={URL.createObjectURL(image)}
                      alt={`The property image ${index + 1}`}
                      style={{ objectFit: "contain" }}
                    />
                    <IconButton
                      color="error"
                      aria-label="remove"
                      onClick={(e) => removeImage(e, index)}
                      size="large"
                      sx={{ position: "absolute", top: 5, right: 5 }}
                    >
                      <DeleteOutline />
                    </IconButton>
                  </ImageWrapper>
                </Grid>
              ))}
              <Grid xs={1}>
                <ImageWrapper>
                  <AddAPhotoOutlined fontSize="large" />
                  <Typography>Add more photos</Typography>
                </ImageWrapper>
              </Grid>
            </Grid>
          ) : (
            <DropZoneContainer>
              {!isDragActive && (
                <>
                  <CloudUploadOutlined
                    sx={{ fontSize: 80, color: orange[800] }}
                  />
                  <Typography variant="h5" gutterBottom>
                    Select or Drop your photos here
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Choose at least 5 photos
                  </Typography>
                </>
              )}
            </DropZoneContainer>
          )}

          {/* Overlay */}
          {isDragActive && (
            <Overlay>
              <PhotoLibraryOutlined sx={{ fontSize: 80, color: grey[800] }} />
              <Typography variant="h5">Drop to upload</Typography>
            </Overlay>
          )}
        </Box>
      </Box>
    </Box>
  );
}
