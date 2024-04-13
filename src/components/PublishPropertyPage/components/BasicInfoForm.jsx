"use client";
import Map from "@/components/Map/Map";
import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import usePlaceAutocomplete from "@/hooks/usePlaceAutocomplete";
import usePlaceDetails from "@/hooks/usePlaceDetails";
import { updateBasicInfoForm } from "@/redux/features/createPostSlice";
import {
  Autocomplete,
  Box,
  FormHelperText,
  InputLabel,
  Paper,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import StepActions from "./StepActions";

export default function BasicInfoForm({ next, back, activeStep, steps }) {
  const dispatch = useDispatch();
  const basicInfo = useSelector((s) => s.createPost.basicInfo);
  const [location, setLocation] = useState([106.660172, 10.762622]);

  const addressDetails = usePlaceDetails(basicInfo.addressId);
  const [addressInput, setAddressInput, suggestions] = usePlaceAutocomplete();

  const { handleSubmit, control, setValue } = useForm({
    defaultValues: basicInfo,
  });

  useEffect(() => {
    if (!addressDetails) {
      setValue("location", []);
      setValue("displayedAddress", "");
      setValue("addressCompound", addressDetails?.compound);
      return;
    }

    const { lat = 10.762, lng = 106.66 } = addressDetails?.geometry?.location;
    setLocation([lng, lat]);
    setValue("location", [lng, lat]);
    setValue("displayedAddress", addressDetails?.formatted_address || "");
    setValue("addressCompound", addressDetails?.compound);
  }, [addressDetails]);

  const onSubmit = (formValue) => {
    console.log(formValue);
    dispatch(updateBasicInfoForm(formValue));
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper sx={{ mt: 3, p: 4 }}>
        <Typography variant="h5">Basic Information</Typography>

        {/* Transaction Type */}
        <Controller
          name="transactionType"
          control={control}
          render={({ field }) => (
            <ToggleButtonGroup
              exclusive
              color="primary"
              sx={{ width: "100%", mt: 2 }}
              {...field}
            >
              <ToggleButton size="small" fullWidth value="sale">
                Sale
              </ToggleButton>
              <ToggleButton size="small" fullWidth value="rent">
                Rent
              </ToggleButton>
            </ToggleButtonGroup>
          )}
        />

        {/* Property Type */}
        <InputLabel sx={{ mt: 2 }} htmlFor="property-type-autocomplete">
          Select Property Type
        </InputLabel>
        <Controller
          name="propertyType"
          control={control}
          render={({ field }) => (
            <Autocomplete
              size="small"
              id="property-type-autocomplete"
              {...field}
              options={Object.keys(PROPERTY_TYPES).slice(1)}
              onChange={(_, type) => field.onChange(type)}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" />
              )}
              getOptionLabel={(option) => PROPERTY_TYPES[option].label}
            />
          )}
        />

        {/* Address Quick Search */}
        <InputLabel sx={{ mt: 2 }} htmlFor="address-autocomplete">
          Address Quick Search
        </InputLabel>

        <Autocomplete
          size="small"
          id="address-autocomplete"
          aria-describedby="address-autocomplete-helper"
          filterOptions={(x) => x}
          noOptionsText="No address found"
          value={basicInfo.address}
          onChange={(_, address) => {
            dispatch(updateBasicInfoForm({ addressId: address?.place_id }));
          }}
          inputValue={addressInput}
          onInputChange={(event, newInputValue) => {
            setAddressInput(newInputValue);
          }}
          options={suggestions}
          getOptionLabel={(option) => option.description}
          defaultValue={basicInfo.address}
          isOptionEqualToValue={(option, value) =>
            option.place_id === value.place_id
          }
          renderInput={(params) => <TextField {...params} variant="outlined" />}
        />
        <FormHelperText id="address-autocomplete-helper">
          The address infromation below is automatically generated based on your
          search result
        </FormHelperText>

        {/* Displayed Address */}
        <Controller
          name="displayedAddress"
          control={control}
          rules={{ required: true }}
          defaultValue={addressDetails?.formatted_address || ""}
          render={({ field, fieldState: { error } }) => (
            <>
              <InputLabel error={error} sx={{ mt: 2 }}>
                Address Displayed
              </InputLabel>
              <TextField {...field} fullWidth size="small" error={error} />
              {error && (
                <FormHelperText error>This is required.</FormHelperText>
              )}
            </>
          )}
        />

        {/* Map */}
        <InputLabel sx={{ mt: 2 }}>See on the map</InputLabel>
        <Box height="500px">
          <Map zoom={18} center={location} />
        </Box>
      </Paper>

      <StepActions steps={steps} activeStep={activeStep} back={back} />
    </form>
  );
}
