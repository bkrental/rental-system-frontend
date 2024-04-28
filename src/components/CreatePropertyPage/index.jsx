"use client";
import { initialSteps } from "@/redux/features/createPostSlice";
import { getCurrentStep, getSteps } from "@/redux/selectors";
import { Box, Container, Typography, Zoom } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostDescriptionForm from "./PostDescriptionForm";
import PostTitleForm from "./PostTitleForm";
import ProgressBar from "./ProgressBar";
import PropertyAddressForm from "./PropertyAddressForm";
import PropertyTypeForm from "./PropertyTypeForm";
import TransactionTypeForm from "./TransactionTypeForm";
import UploadImagesForm from "./UploadImagesForm";
import PropertyDetailsForm from "./PropertyDetailsForm";

const CREATE_PROPERTY_STEPS = [
  {
    title: "What do you want to do?",
    description: "Please select the transaction type",
    Component: TransactionTypeForm,
  },
  {
    title: "Which of these best describes your place?",
    description: "Select the type of property",
    Component: PropertyTypeForm,
  },
  {
    title: "Where your property is located?",
    description: "Select the address of your property",
    Component: PropertyAddressForm,
  },
  {
    title: "Let's give your post a title!",
    description:
      "Short titles work best. Have fun with it—you can always change it later.",
    Component: PostTitleForm,
  },
  {
    title: "Create your post description",
    description:
      "A good description should cover all the key features of your property. It should be detailed and informative.",
    Component: PostDescriptionForm,
  },
  {
    title: "Add some photos of your property",
    description:
      "You'll need 5 photos to get started. You can add more or make changes later.",
    Component: UploadImagesForm,
  },
  {
    title: "Provide some details about your property",
    description:
      "Tell us more about your property, such as the number of bedrooms, bathrooms, and the area of the property.",
    Component: PropertyDetailsForm,
  },
];

export default function CreatePropertyPage() {
  const dispatch = useDispatch();
  const currentStep = useSelector(getCurrentStep);
  const steps = useSelector(getSteps);

  useEffect(() => {
    dispatch(initialSteps(CREATE_PROPERTY_STEPS.length));
  }, []);

  return (
    <Container>
      <Box pb={6}>
        {CREATE_PROPERTY_STEPS.map(
          ({ Component, title, description }, index) => (
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
          )
        )}
      </Box>

      <ProgressBar steps={steps} currentStep={currentStep} />
      <Box height="50px"></Box>
    </Container>
  );
}
