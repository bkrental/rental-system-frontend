"use client";
import {
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function PropertyInfoForm() {
  return (
    <Paper sx={{ mt: 3, p: 4 }}>
      <Typography variant="h5">Property Information</Typography>

      <Grid container columns={3} mt={2} spacing={1}>
        <Grid xs={1}>
          <OutlinedInput
            size="small"
            id="area"
            endAdornment={
              <InputAdornment position="end">
                m <sup>2</sup>
              </InputAdornment>
            }
            startAdornment={
              <InputAdornment position="start">
                <Typography>Area</Typography>
              </InputAdornment>
            }
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
        </Grid>
        <Grid xs={1}>
          <OutlinedInput
            size="small"
            id="bedroom"
            startAdornment={
              <InputAdornment position="start">
                <Typography>Bedrooms</Typography>
              </InputAdornment>
            }
          />
        </Grid>
        <Grid xs={1}>
          <OutlinedInput
            size="small"
            id="bathroom"
            startAdornment={
              <InputAdornment position="start">
                <Typography>Bathroom</Typography>
              </InputAdornment>
            }
          />
        </Grid>
      </Grid>

      <InputLabel sx={{ mt: 2 }} htmlFor="description">
        Description
      </InputLabel>
      <TextField id="description" size="small" fullWidth multiline rows={4} />
    </Paper>
  );
}
