import { setIsStepCompleted } from "@/redux/features/createPostSlice";
import { Divider, Stack, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import Dropzone from "./components/Dropzone";
import PreviewImageList from "./components/PreviewImageList";

export default function UploadImagesForm() {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([]);
  const uploadedImages = useSelector((s) => s.createPost.images);

  const dropzoneConfig = useMemo(
    () => ({
      noClick: true,
      noKeyboard: true,
      maxFiles: 5,
      accept: { "image/*": [".jpg", ".jpeg", ".png"] },
      onDrop: (acceptedFiles) => {
        const images = acceptedFiles.map((file) => ({
          id: uuid(),
          url: URL.createObjectURL(file),
          uploaded: false,
          data: file,
        }));
        setSelectedImages((prev) => [...prev, ...images]);
      },
    }),
    []
  );

  useEffect(() => {
    setSelectedImages(uploadedImages);
  }, []);

  useEffect(() => {
    if (uploadedImages.length >= 5) {
      dispatch(setIsStepCompleted(true));
    } else {
      dispatch(setIsStepCompleted(false));
    }
  }, [uploadedImages]);

  return (
    <Stack spacing={2}>
      {/* Dropzone */}
      <Dropzone config={dropzoneConfig} />

      <Divider />
      <Typography variant="h6">Preview selected images</Typography>
      {/* Image Previews */}
      <PreviewImageList images={selectedImages} setImages={setSelectedImages} />
    </Stack>
  );
}
