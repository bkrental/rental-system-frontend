"use client";
import { InputLabel, Paper, TextField, Typography } from "@mui/material";
import StepActions from "./StepActions";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updatePostInfoForm } from "@/redux/features/createPostSlice";

export default function PostInfoForm({ steps, activeStep, back, next }) {
  const postInfo = useSelector((s) => s.createPost.postInfo);
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ defaultValues: postInfo });

  const onSubmit = (formValue) => {
    console.log(formValue);
    dispatch(updatePostInfoForm(formValue));
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ mt: 3, p: 4 }}>
        <Typography variant="h5">Post Information</Typography>

        <InputLabel sx={{ mt: 2 }} htmlFor="title">
          Title
        </InputLabel>
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <TextField size="small" fullWidth multiline rows={2} {...field} />
          )}
        />

        <InputLabel sx={{ mt: 2 }} htmlFor="description">
          Description
        </InputLabel>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <TextField size="small" fullWidth multiline rows={4} {...field} />
          )}
        />
      </Paper>

      <StepActions steps={steps} activeStep={activeStep} back={back} />
    </form>
  );
}
