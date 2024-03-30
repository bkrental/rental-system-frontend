"use client";
import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import {
  Paper,
  Typography,
  Container,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
  Box,
  Stack,
} from "@mui/material";
import { useState } from "react";

function PublishPostPage() {
  const [transactionType, setTransactionType] = useState("sale");
  const [propertyType, setPropertyType] = useState(null);
  const handleTransactionTypeChange = (event, type) => {
    if (type === null) return;
    setTransactionType(type);
  };

  console.log(propertyType);

  return (
    <Container maxWidth="md">
      <Paper sx={{ mt: 3, p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Basic property information
        </Typography>

        <ToggleButtonGroup
          exclusive
          color="primary"
          sx={{ width: "100%" }}
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

        <Autocomplete
          size="small"
          sx={{ mt: 2 }}
          options={SUPPORTED_PROPERTY_TYPES.slice(1)}
          renderOption={(props, option) => (
            <Stack {...props} direction="row" gap={1} alignItems="center">
              <option.Icon fontSize="small" />
              <Typography variant="body2"> {option.label} </Typography>
            </Stack>
          )}
          renderInput={(params) => (
            <TextField {...params} label="Property Type" />
          )}
          onChange={(event, newValue) => setPropertyType(newValue)}
        />
      </Paper>
    </Container>
  );
}

export default PublishPostPage;
