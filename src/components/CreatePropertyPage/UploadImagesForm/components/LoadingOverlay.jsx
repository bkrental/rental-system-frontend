import { CircularProgress, Stack, styled } from "@mui/material";

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

export default function LoadingOverlay() {
  return (
    <OverlayContainer>
      <CircularProgress size={80} />
    </OverlayContainer>
  );
}
