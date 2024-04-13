"use client";
import {
  Divider,
  IconButton,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  OutlinedInput,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import StepActions from "./StepActions";
import { useState } from "react";
import {
  Add,
  AddCircleOutline,
  AddCircleOutlineOutlined,
  AddOutlined,
  Remove,
  RemoveCircleOutline,
} from "@mui/icons-material";
import { updatePropertyInfo } from "@/redux/features/createPostSlice";

const ListRow = ({ children }) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      {children}
    </Stack>
  );
};

const NumberInputRow = ({ label, value, setValue, min = 0, max = 10 }) => {
  const canIncreased = value < max;
  const canDecreased = value > min;
  const increase = () => canIncreased && setValue((prev) => prev + 1);
  const decrease = () => canDecreased && setValue((prev) => prev - 1);

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      py={3}
    >
      <Typography sx={{ fontSize: 18 }}>{label}</Typography>
      <Stack direction="row" alignItems="center" gap={2}>
        <IconButton
          disabled={!canDecreased}
          aria-label="decrease"
          onClick={decrease}
          size="small"
          sx={{ border: 1 }}
        >
          <Remove />
        </IconButton>
        <Typography>{value}</Typography>
        <IconButton
          disabled={!canIncreased}
          aria-label="increase"
          onClick={increase}
          size="small"
          sx={{ border: 1 }}
        >
          <Add />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default function PropertyInfoForm({ steps, activeStep, back, next }) {
  const dispatch = useDispatch();
  const basicInfo = useSelector((s) => s.createPost.basicInfo);
  const postInfo = useSelector((s) => s.createPost.postInfo);
  const propertyInfo = useSelector((s) => s.createPost.propertyInfo);

  const [bedrooms, setBedrooms] = useState(propertyInfo.bedrooms);
  const [bathrooms, setBathrooms] = useState(propertyInfo.bathrooms);
  const [area, setArea] = useState(propertyInfo.area);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePropertyInfo({ bedrooms, bathrooms, area }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Paper sx={{ mt: 3, p: 4 }}>
        <Typography component="h1" variant="h5" sx={{ fontSize: 32 }}>
          Property Information
        </Typography>

        <List>
          <NumberInputRow
            label="Bedrooms"
            value={bedrooms}
            setValue={setBedrooms}
          />
          <Divider component="li" />
          <NumberInputRow
            label="Bathrooms"
            value={bathrooms}
            setValue={setBathrooms}
          />
          <Divider component="li" />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            py={3}
          >
            <Typography sx={{ fontSize: 18 }}>Area</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <OutlinedInput
                size="small"
                id="area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                sx={{ maxWidth: 80 }}
                inputProps={{ style: { textAlign: "center" } }}
              />
              <Typography>
                m<sup>2</sup>
              </Typography>
            </Stack>
          </Stack>
        </List>
      </Paper>

      <StepActions steps={steps} activeStep={activeStep} back={back} />
    </form>
  );
}
