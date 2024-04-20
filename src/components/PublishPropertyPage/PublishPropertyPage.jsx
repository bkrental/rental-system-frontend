"use client";
import { initialSteps } from "@/redux/features/createPostSlice";
import { getCurrentStep, getSteps } from "@/redux/selectors";
import { Container, Typography, Zoom } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import LocationSelect from "./components/LocationSelect";
import PropertyTypeSelect from "./components/PropertyTypeSelect";
import TransactionTypeSelect from "./components/TransactionTypeSelect";

function PublishPostPage() {
  const dispatch = useDispatch();
  const currentStep = useSelector(getCurrentStep);
  const steps = useSelector(getSteps);

  const stepConfigs = [
    {
      title: "What do you want to do?",
      description: "Please select the transaction type",
      Component: TransactionTypeSelect,
    },
    {
      title: "Which of these best describes your place?",
      description: "Select the type of property",
      Component: PropertyTypeSelect,
    },
    {
      title: "Where your property is located?",
      description: "Select the location of the property",
      Component: LocationSelect,
    },
  ];

  useEffect(() => {
    dispatch(initialSteps(stepConfigs.length));
  }, []);

  return (
    <Container maxWidth="md">
      {stepConfigs.map(({ Component, title, description }, index) => (
        <Zoom
          in={currentStep === index}
          key={Component.name}
          sx={{ display: currentStep === index ? "block" : "none" }}
          unmountOnExit
        >
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" mt={4}>
              {title}
            </Typography>

            <Typography variant="subtitle2" pb={3} pt={1}>
              {description}
            </Typography>

            <Component />
          </Container>
        </Zoom>
      ))}

      <ProgressBar steps={steps} currentStep={currentStep} />
    </Container>
  );
}

export default PublishPostPage;
