"use client";
import Map from "@/components/Map/Map";
import usePlaceAutocomplete from "@/hooks/usePlaceAutocomplete";
import {
  setAddress,
  setIsStepCompleted,
  setLocation,
} from "@/redux/features/createPostSlice";
import {
  Autocomplete,
  Box,
  Divider,
  Fade,
  FormHelperText,
  InputLabel,
  styled,
  TextField,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { isNull } from "lodash";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CustomInputLabel = styled(InputLabel)(() => {
  return {
    fontSize: "0.9rem",
    fontWeight: "bold",
    color: grey[900],
  };
});

export default function LocationSelect() {
  const dispatch = useDispatch();
  const address = useSelector((s) => s.createPost.address);
  const location = useSelector((s) => s.createPost.location);
  const [addressInput, setAddressInput, suggestions] = usePlaceAutocomplete();

  const handleAddressChange = (_, address) => {
    dispatch(setAddress(address));
  };

  useEffect(() => {
    const getLocation = async (addressId) => {
      const url = `/api/places/details?place_id=${addressId}`;
      const response = await fetch(url.toString());
      const data = await response.json();

      return data?.result?.geometry?.location;
    };

    if (address?.place_id) {
      getLocation(address.place_id)
        .then((location) => {
          const { lng, lat } = location;
          dispatch(setLocation([lng, lat]));
          dispatch(setIsStepCompleted(true));
        })
        .catch((e) => {
          dispatch(setLocation(null));
          dispatch(setIsStepCompleted(false));
          console.log(e);
        });
    }
  }, [address]);

  const handleLocationChange = (geocode) => {
    if (geocode) {
      const { lat, lng } = geocode;
      dispatch(setLocation([lng, lat]));
    }
  };

  return (
    <Box position="relative">
      <CustomInputLabel htmlFor="address-autocomplete">
        Address Quick Search
      </CustomInputLabel>
      <Autocomplete
        size="small"
        id="address-autocomplete"
        aria-describedby="address-autocomplete-helper"
        filterOptions={(x) => x}
        noOptionsText="No address found"
        onChange={handleAddressChange}
        value={address}
        inputValue={addressInput}
        onInputChange={(_, newInputValue) => {
          setAddressInput(newInputValue);
        }}
        options={suggestions}
        getOptionLabel={(option) => option.description}
        isOptionEqualToValue={(option, value) =>
          option.place_id === value.place_id
        }
        renderInput={(params) => <TextField {...params} variant="outlined" />}
      />
      <FormHelperText id="address-autocomplete-helper">
        The address infromation below is automatically generated based on your
        search result
      </FormHelperText>

      <Fade in={!isNull(address)}>
        <Box mt={2}>
          <CustomInputLabel htmlFor="display-address">
            Display address
          </CustomInputLabel>
          <TextField
            id="display-address"
            size="small"
            hiddenLabel
            variant="outlined"
            value={address?.description ?? ""}
            fullWidth
          />
          <FormHelperText>
            This is the address that will be displayed to the tenants
          </FormHelperText>

          <Divider sx={{ mt: 2 }} />
          <Box height="500px" width="100%" mt={2} pb={4}>
            <CustomInputLabel>Show your specific location</CustomInputLabel>
            <FormHelperText>Drag the pointer to exact location</FormHelperText>
            <Map zoom={20} center={location} onDragEnd={handleLocationChange} />
          </Box>
        </Box>
      </Fade>
    </Box>
  );
}
