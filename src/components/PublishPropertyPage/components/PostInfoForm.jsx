"use client";
import { InputLabel, Paper, TextField, Typography } from "@mui/material";

export default function PostInfoForm() {
  return (
    <Paper sx={{ mt: 3, p: 4 }}>
      <Typography variant="h5">Post Information</Typography>

      <InputLabel sx={{ mt: 2 }} htmlFor="title">
        Title
      </InputLabel>
      <TextField id="title" size="small" fullWidth multiline rows={2} />

      <InputLabel sx={{ mt: 2 }} htmlFor="description">
        Description
      </InputLabel>
      <TextField id="description" size="small" fullWidth multiline rows={4} />
    </Paper>
  );
}
