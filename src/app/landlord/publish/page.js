"use client";
import {
  Container,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import BasicInfoForm from "./components/BasicInfoForm";
import StepBar from "./components/StepBar";
import { Component, useMemo, useState } from "react";
import PostInfoForm from "./components/PostInfoForm";
import PropertyInfoForm from "./components/PropertyInfoForm";
import StepActions from "./components/StepActions";
import { useDispatch } from "react-redux";

function PublishPostPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = useMemo(
    () => [
      {
        label: "Basic Information",
        Component: BasicInfoForm,
      },
      {
        label: "Post Information",
        Component: PostInfoForm,
        complete: (data) => console.log("step 2 complete"),
      },
      {
        label: "Property Information",
        Component: PropertyInfoForm,
        complete: () => console.log("step 3 complete"),
      },
    ],
    []
  );

  const goNext = () => setActiveStep((prev) => prev + 1);
  const goBack = () => setActiveStep((prev) => prev - 1);

  return (
    <Container maxWidth="md">
      <StepBar steps={steps} activeStep={activeStep} />

      {steps.map(
        ({ Component, complete }, index) =>
          index === activeStep && <Component key={index} complete={complete} />
      )}

      <StepActions
        steps={steps}
        activeStep={activeStep}
        next={goNext}
        back={goBack}
      />
    </Container>
  );
}

export default PublishPostPage;
