import { CloudUpload, PhotoLibraryOutlined } from "@mui/icons-material";
import { Button, Stack, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useDropzone } from "react-dropzone";

const DropZoneContainer = styled(Stack)(() => ({
  position: "relative",
  height: "240px",
  justifyContent: "center",
  alignItems: "center",
  border: "1px dashed black",
  borderRadius: 2,
}));

const DropZoneOverlay = styled(Stack)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(190, 190, 190, 0.5)",
  justifyContent: "center",
  alignItems: "center",
}));

export default function Dropzone({ config }) {
  const { getRootProps, getInputProps, isDragActive, open } =
    useDropzone(config);

  return (
    <DropZoneContainer {...getRootProps()}>
      <input {...getInputProps()} />

      {!isDragActive ? (
        <>
          <Typography variant="h5">Drop your photos here</Typography>
          <Typography variant="body2">Choose at least 5 photos</Typography>

          <Button
            onClick={open}
            variant="contained"
            sx={{ mt: 2 }}
            startIcon={<CloudUpload />}
          >
            Upload from your devices
          </Button>
        </>
      ) : (
        <DropZoneOverlay>
          <PhotoLibraryOutlined sx={{ fontSize: 60, color: grey[800] }} />
          <Typography variant="h5">Drop your photos here</Typography>
        </DropZoneOverlay>
      )}
    </DropZoneContainer>
  );
}
