"use client";
import { Button, Stack } from "@mui/material";

export default function StepActions({ activeStep, steps, next, back }) {
  const handleNext = () => {
    steps[activeStep].complete();
    next();
  };
  return (
    <Stack direction="row" gap={2} py={3} justifyContent="flex-end">
      <Button color="inherit" disabled={activeStep === 0} onClick={back}>
        Back
      </Button>

      <Button onClick={handleNext} variant="contained">
        {activeStep === steps.length - 1 ? "Submit" : "Next"}
      </Button>
    </Stack>
  );
}
