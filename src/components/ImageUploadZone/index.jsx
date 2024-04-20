import { useDropzone } from "react-dropzone";
import { Box, Stack, Typography } from "@mui/material";
import { orange } from "@mui/material/colors";
import { CloudUploadOutlined, PhotoLibraryOutlined } from "@mui/icons-material";

export default function ImageUploadZone({ onDrop, DragInactiveComponent }) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });

  return (
    <Box
      {...getRootProps()}
      sx={{ border: "1px dashed black", borderRadius: 2, p: 4 }}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Stack height="400px" justifyContent="center" alignItems="center">
          <PhotoLibraryOutlined sx={{ fontSize: 80, color: orange[800] }} />
          <Typography variant="h5" gutterBottom>
            Drop to upload
          </Typography>
        </Stack>
      ) : (
        { DragInactiveComponent }
        // <DragInactiveComponent />
        // <Stack height="400px" justifyContent="center" alignItems="center">
        //   <CloudUploadOutlined sx={{ fontSize: 80, color: orange[800] }} />
        //   <Typography variant="h5" gutterBottom>
        //     Select or Drop your photos here
        //   </Typography>
        //   <Typography variant="body2" color="text.secondary">
        //     Choose at least 5 photos
        //   </Typography>
        // </Stack>
      )}
    </Box>
  );
}
