"use client";
import { initialSteps } from "@/redux/features/createPostSlice";
import { getCurrentStep, getSteps } from "@/redux/selectors";
import { Box, Container, Hidden, Typography, Zoom } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import LocationSelect from "./components/LocationSelect";
import PropertyTypeSelect from "./components/PropertyTypeSelect";
import TransactionTypeSelect from "./components/TransactionTypeSelect";
import TitleInputForm from "./components/TitleInputForm";
import DescriptionInputForm from "./components/DescriptionInputForm";
import ImageUploadForm from "./components/ImageUploadForm";

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
    {
      title: "Let's give your post a title!",
      description:
        "Short titles work best. Have fun with it—you can always change it later.",
      Component: TitleInputForm,
    },
    {
      title: "Create your post description",
      description:
        "A good description should cover all the key features of your property. It should be detailed and informative.",
      Component: DescriptionInputForm,
    },
    {
      title: "Add some photos of your property",
      description:
        "You'll need 5 photos to get started. You can add more or make changes later.",
      Component: ImageUploadForm,
    },
  ];

  useEffect(() => {
    dispatch(initialSteps(stepConfigs.length));
  }, []);

  return (
    <Container>
      <Box pb={6}>
        {stepConfigs.map(({ Component, title, description }, index) => (
          <Zoom
            in={currentStep === index}
            key={Component.name}
            sx={{ display: currentStep === index ? "block" : "none" }}
            unmountOnExit
          >
            <Container maxWidth="md">
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
      </Box>

      <ProgressBar steps={steps} currentStep={currentStep} />
      <Box height="50px"></Box>
    </Container>
  );
}

export default PublishPostPage;
