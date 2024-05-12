import usePlaceAutocomplete from "@/hooks/usePlaceAutocomplete";
import { Autocomplete, InputLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { StringParam, useQueryParam } from "use-query-params";

export default function AddressInput() {
  const [addressInput, setAddressInput, suggestions] = usePlaceAutocomplete();
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useQueryParam("center", StringParam);

  const handleAddressChange = (_, address) => {
    setAddress(address);
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
          setLocation(`${lng},${lat}`);
        })
        .catch((e) => {
          dispatch(setLocation(null));
        });
    }
  }, [address]);

  return (
    <Autocomplete
      size="small"
      id="address-autocomplete"
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
      isOptionEqualToValue={(option, value) => option.place_id === value.place_id}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" label="Search for city, neighborhood or location" />
      )}
    />
  );
}
