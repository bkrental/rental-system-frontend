"use client";
import { Container, Fade, Grow, Typography, Zoom } from "@mui/material";
import { useCallback, useMemo, useState } from "react";
import BasicInfoForm from "./components/BasicInfoForm";
import PostInfoForm from "./components/PostInfoForm";
import PropertyInfoForm from "./components/PropertyInfoForm";
import StepActions from "./components/StepActions";
import StepBar from "./components/StepBar";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

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
      },
      {
        label: "Property Information",
        Component: PropertyInfoForm,
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
        ({ Component, label }, index) =>
          activeStep === index && (
            <Component
              key={label}
              next={goNext}
              back={goBack}
              activeStep={activeStep}
              steps={steps}
            />
          )
      )}
    </Container>
  );
}

export default PublishPostPage;
