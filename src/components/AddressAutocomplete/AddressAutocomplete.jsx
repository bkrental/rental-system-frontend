import usePlaceAutocomplete from "@/hooks/usePlaceAutocomplete";
import { Autocomplete, TextField } from "@mui/material";

export default function AddressAutocomplete({ onChange, ...props }) {
  const [addressInput, setAddressInput, suggestions] = usePlaceAutocomplete();

  return (
    <Autocomplete
      filterOptions={(x) => x}
      noOptionsText="No address found"
      onChange={onChange}
      inputValue={addressInput}
      onInputChange={(event, newInputValue) => {
        setAddressInput(newInputValue);
      }}
      options={suggestions}
      getOptionLabel={(option) => option.description}
      isOptionEqualToValue={(option, value) =>
        option.place_id === value.place_id
      }
      renderInput={(params) => <TextField {...params} variant="outlined" />}
      {...props}
    />
  );
}
