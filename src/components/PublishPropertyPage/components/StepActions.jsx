"use client";
import { Button, Stack } from "@mui/material";

export default function StepActions({ activeStep, steps, back }) {
  return (
    <Stack direction="row" gap={2} py={3} justifyContent="flex-end">
      <Button color="inherit" disabled={activeStep === 0} onClick={back}>
        Back
      </Button>

      <Button variant="contained" type="submit">
        {activeStep === steps.length - 1 ? "Submit" : "Next"}
      </Button>
    </Stack>
  );
}
