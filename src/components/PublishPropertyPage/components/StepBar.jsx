import { Box, Step, StepLabel, Stepper } from "@mui/material";

export default function StepBar({ activeStep, steps }) {
  return (
    <Box sx={{ w: "100%", mt: 4 }}>
      <Stepper activeStep={activeStep}>
        {steps.map(({ label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
