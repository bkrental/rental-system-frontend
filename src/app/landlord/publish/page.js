"use client";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import { BathtubOutlined, BedroomParentOutlined } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Container,
  FormHelperText,
  InputLabel,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

function PublishPostPage() {
  const [transactionType, setTransactionType] = useState("sale");
  const [propertyType, setPropertyType] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationInput, setLocationInput] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);
  const [locationDetails, setLocationDetails] = useState(null);
  const [locationDisplay, setLocationDisplay] = useState("");

  console.log(locationDetails);

  useEffect(() => {
    const getLocationDetails = async () => {
      if (!location || !location?.place_id) return;

      const BASE_URL = process.env.NEXT_PUBLIC_LOCATION_SERVICE_ENDPOINT;
      const response = await fetch(`${BASE_URL}/places/${location.place_id}`);
      const data = await response.json();
      return data?.result;
    };

    getLocationDetails().then((data) => {
      setLocationDetails(data);
      setLocationDisplay(data?.formatted_address || "");
    });
  }, [location]);

  const handleTransactionTypeChange = (event, type) => {
    if (type === null) return;
    setTransactionType(type);
  };

  useEffect(() => {
    const getLocationOptions = debounce(async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_LOCATION_SERVICE_ENDPOINT;
      const response = await fetch(
        `${BASE_URL}/autocomplete?input=${locationInput}`
      );
      const data = await response.json();
      setLocationOptions(data?.predictions || []);
    }, 500);

    if (locationInput) {
      getLocationOptions();
    }
  }, [locationInput]);

  console.log(locationDetails?.geometry?.location);

  return (
    <Container maxWidth="md">
      <Paper sx={{ mt: 3, p: 4 }}>
        <Typography variant="h5">Basic Information</Typography>

        <ToggleButtonGroup
          exclusive
          color="primary"
          sx={{ width: "100%", mt: 2 }}
          value={transactionType}
          onChange={handleTransactionTypeChange}
        >
          <ToggleButton size="small" fullWidth value="sale">
            Sale
          </ToggleButton>
          <ToggleButton size="small" fullWidth value="rent">
            Rent
          </ToggleButton>
        </ToggleButtonGroup>

        <InputLabel sx={{ mt: 2 }} htmlFor="property-type-autocomplete">
          Select Property Type
        </InputLabel>
        <Autocomplete
          size="small"
          id="property-type-autocomplete"
          options={SUPPORTED_PROPERTY_TYPES.slice(1)}
          renderOption={(props, option) => (
            <Stack {...props} direction="row" gap={1} alignItems="center">
              <option.Icon fontSize="small" />
              <Typography variant="body2"> {option.label} </Typography>
            </Stack>
          )}
          renderInput={(params) => <TextField {...params} variant="outlined" />}
          onChange={(event, newValue) => setPropertyType(newValue)}
        />

        <InputLabel sx={{ mt: 2 }} htmlFor="location-autocomplete">
          Address Quick Search
        </InputLabel>
        <Autocomplete
          size="small"
          id="location-autocomplete"
          aria-describedby="location-autocomplete-helper"
          filterOptions={(x) => x}
          noOptionsText="No locations"
          options={locationOptions}
          getOptionLabel={(option) => option.description}
          onChange={(event, location) => {
            setLocationOptions(
              location ? [location, ...locationOptions] : locationOptions
            );
            setLocation(location);
          }}
          onInputChange={(event, newInputValue) => {
            setLocationInput(newInputValue);
          }}
          isOptionEqualToValue={(option, value) =>
            option.place_id === value.place_id
          }
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <FormHelperText id="location-autocomplete-helper">
          The address infromation below is automatically generated based on your
          search result
        </FormHelperText>

        <InputLabel sx={{ mt: 2 }} htmlFor="location-display">
          Address Displayed
        </InputLabel>
        <TextField
          id="location-display"
          size="small"
          value={locationDisplay}
          placeholder="Display Address"
          onChange={(e) => setLocationDisplay(e.target.value)}
          fullWidth
        />

        <InputLabel sx={{ mt: 2 }}>See on the map</InputLabel>
        <Box height="500px">
          <GoogleMap zoom={18} center={locationDetails?.geometry?.location} />
        </Box>
      </Paper>

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

      <Paper sx={{ mt: 3, p: 4 }}>
        <Typography variant="h5">Property Information</Typography>

        <Grid container columns={3} mt={2} spacing={1}>
          <Grid item xs={1}>
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
          <Grid item xs={1}>
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
          <Grid item xs={1}>
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
    </Container>
  );
}

export default PublishPostPage;
