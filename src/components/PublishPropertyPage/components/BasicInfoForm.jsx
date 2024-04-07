"use client";
import Map from "@/components/Map/Map";
import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import usePlaceAutocomplete from "@/hooks/usePlaceAutocomplete";
import usePlaceDetails from "@/hooks/usePlaceDetails";
import {
  setAddress,
  setDisplayedAddress,
  setPropertyType,
  setTransactionType,
} from "@/redux/features/createPostSlice";
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
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BasicInfoForm() {
  const dispatch = useDispatch();
  const transactionType = useSelector((s) => s.createPost.transactionType);
  const propertyType = useSelector((s) => s.createPost.propertyType);
  const address = useSelector((s) => s.createPost.address);
  const displayedAddress = useSelector((s) => s.createPost.displayedAddress);

  const addressDetails = usePlaceDetails(address);
  const [addressInput, setAddressInput, addressOptions] =
    usePlaceAutocomplete();

  const addressGeocode = useMemo(() => {
    const { lng, lat } = addressDetails?.geometry?.location || {
      lng: 106.660172,
      lat: 10.762622,
    };
    return [lng, lat];
  }, [addressDetails]);

  useEffect(() => {
    if (!addressDetails) return;

    dispatch(setDisplayedAddress(addressDetails?.formatted_address));
  }, [addressDetails]);

  const handleTransactionTypeChange = (event, type) => {
    if (type === null) return;
    dispatch(setTransactionType(type));
  };

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
        value={SUPPORTED_PROPERTY_TYPES.find(
          (type) => type.value === propertyType
        )}
        onChange={(event, type) => dispatch(setPropertyType(type.value))}
        renderOption={(props, option) => (
          <Stack
            {...props}
            key={option.value}
            direction="row"
            gap={1}
            alignItems="center"
          >
            <option.Icon fontSize="small" />
            <Typography variant="body2"> {option.label} </Typography>
          </Stack>
        )}
        renderInput={(params) => <TextField {...params} variant="outlined" />}
        isOptionEqualToValue={(option, value) => option.value === value.value}
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
        value={address}
        onChange={(event, location) => {
          dispatch(setAddress(location));
        }}
        inputValue={addressInput}
        onInputChange={(event, newInputValue) => {
          setAddressInput(newInputValue);
        }}
        options={addressOptions}
        getOptionLabel={(option) => option.description}
        defaultValue={address}
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
        value={displayedAddress}
        placeholder="Display Address"
        onChange={(e) => setDisplayedAddress(e.target.value)}
        fullWidth
      />

      <InputLabel sx={{ mt: 2 }}>See on the map</InputLabel>
      <Box height="500px">
        <Map zoom={18} center={addressGeocode || [106.660172, 10.762622]} />
      </Box>
    </Paper>
  );
}
