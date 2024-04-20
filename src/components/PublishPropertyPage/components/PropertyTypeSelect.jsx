"use client";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import {
  setIsStepCompleted,
  setPropertyType,
} from "@/redux/features/createPostSlice";
import { getPropertyType } from "@/redux/selectors";
import { Box, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const boxStyles = {
  minHeight: 60,
  border: 1,
  borderRadius: 2,
  borderColor: grey[300],
  p: 2,
  cursor: "pointer",
  "&:hover": {
    borderColor: "transparent",
    boxShadow: `0 0 0 2px ${grey[900]}`,
  },
};

const boxSelectedStyles = {
  ...boxStyles,
  border: 1,
  borderColor: "transparent",
  boxShadow: `0 0 0 2px ${grey[900]}`,
  backgroundColor: grey[200],
};

export default function PropertyTypeSelect() {
  const dispatch = useDispatch();
  const propertyType = useSelector(getPropertyType);

  const handleChange = (type) => {
    dispatch(setPropertyType(type));
  };

  useEffect(() => {
    dispatch(setIsStepCompleted(true));
  }, [propertyType]);

  return (
    <Grid container spacing={2}>
      {Object.keys(PROPERTY_TYPES).map((type) => {
        const Icon = PROPERTY_TYPES[type].Icon;
        return (
          <Grid xs={4} key={type} onClick={() => handleChange(type)}>
            <Box sx={propertyType === type ? boxSelectedStyles : boxStyles}>
              <Icon fontSize="large" sx={{ color: grey[800] }} />
              <Typography>{PROPERTY_TYPES[type].label}</Typography>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
