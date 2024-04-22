import { goBack, goNext } from "@/redux/features/createPostSlice";
import { Box, Button, Stack, styled } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";

const CustomLinearProgress = styled(LinearProgress)(() => ({
  height: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: grey[300],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "hsl(24.6, 95%, 53.1%)",
  },
}));

const Container = styled(Box)(() => ({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "#fff",
  zIndex: 2,
}));

export default function ProgressBar({ currentStep, steps }) {
  const dispatch = useDispatch();
  const progress = (currentStep / steps) * 100;

  const isStepCompleted = useSelector(
    (s) => s.createPost.isCurrentStepCompleted
  );
  const next = () => dispatch(goNext());
  const back = () => dispatch(goBack());

  return (
    <Container>
      <CustomLinearProgress value={progress} variant="determinate" />
      <Stack px={4} py={2} direction="row" justifyContent="space-between">
        <Button
          size="large"
          sx={{ color: grey[900], textDecoration: "underline" }}
          disabled={currentStep === 0}
          onClick={back}
        >
          Back
        </Button>
        <Button
          size="large"
          variant="contained"
          onClick={next}
          disabled={!isStepCompleted}
        >
          {currentStep === steps - 1 ? "Submit" : "Next"}
        </Button>
      </Stack>
    </Container>
  );
}
