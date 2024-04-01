"use client";
import GoogleMap from "@/components/GoogleMap/GoogleMap";
import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import {
  Autocomplete,
  Box,
  FormHelperText,
  InputLabel,
  Paper,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import StepActions from "./StepActions";
import { useDispatch, useSelector } from "react-redux";
import {
  setTransactionType,
  setPropertyType,
} from "@/redux/features/createPostSlice";

export default function BasicInfoForm() {
  const [transactionType, setTransactionType] = useState("sale");
  const [propertyType, setPropertyType] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationInput, setLocationInput] = useState("");
  const [locationOptions, setLocationOptions] = useState([]);
  const [locationDetails, setLocationDetails] = useState(null);
  const [locationDisplay, setLocationDisplay] = useState("");

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

  return (
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
        onChange={(event, type) => setPropertyType(type)}
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
  );
}
