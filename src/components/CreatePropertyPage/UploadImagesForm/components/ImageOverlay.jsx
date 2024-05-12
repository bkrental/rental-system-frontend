import { HighlightOff } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Stack,
  styled,
  Typography,
} from "@mui/material";

const OverlayContainer = styled(Stack)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(190, 190, 190, 0.5)",

  justifyContent: "center",
  alignItems: "center",
}));

export function LoadingOverlay({ loading }) {
  return (
    loading && (
      <OverlayContainer>
        <CircularProgress size={80} />
      </OverlayContainer>
    )
  );
}

export function UploadErrorOverlay({ error }) {
  return (
    error && (
      <OverlayContainer sx={{ backgroundColor: "rgba(180, 180, 180, 0.7)" }}>
        <Stack alignItems="center">
          <HighlightOff sx={{ fontSize: 60 }} color="error" />
          <Typography color="#000" variant="h6" fontWeight="bold">
            Upload failed
          </Typography>
        </Stack>
      </OverlayContainer>
    )
  );
}
