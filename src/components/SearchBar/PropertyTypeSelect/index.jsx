import React, { useCallback, useMemo, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  Checkbox,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import { ArrayParam, StringParam, useQueryParam, withDefault } from "use-query-params";
import { useSearchParams } from "next/navigation";
import _ from "lodash";

const ITEM_HEIGHT = 42;
const ITEM_PADDING_TOP = 40;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const PropertyTypeSelect = () => {
  const [propertyTypesQuery, setPropertyTypesQuery] = useQueryParam("pt", withDefault(ArrayParam, []));
  const propertyTypes = useMemo(() =>
    propertyTypesQuery ? _.intersection(Object.keys(PROPERTY_TYPES), propertyTypesQuery) : []
  );
  // const searchParam = useSearchParams();
  // const [propertyTypes, setPropertyTypes] = useState(searchParam.get("pt") ?? []);
  // const [_, setPropertyTypeQuery] = useQueryParam("pt", withDefault(StringParam, ""));

  const handleChange = (e) => {
    const propertyTypes = e.target.value;

    setPropertyTypesQuery(typeof propertyTypes == "string" ? propertyTypes : propertyTypes);
  };

  return (
    <FormControl sx={{ width: 200 }}>
      <Select
        multiple
        displayEmpty
        size="small"
        renderValue={(selected) => {
          return selected.length === 0
            ? "Any Property Type"
            : selected.length === 1
            ? PROPERTY_TYPES[selected[0]]?.label
            : `Property Types (${selected.length})`;
        }}
        value={propertyTypes}
        onChange={handleChange}
        input={<OutlinedInput />}
        inputProps={{ "aria-label": "Without label" }}
        MenuProps={MenuProps}
      >
        <MenuItem disabled value="">
          Property Type
        </MenuItem>
        {Object.values(PROPERTY_TYPES).map(({ value, label }) => (
          <MenuItem sx={{ py: 0, pl: 1 }} key={value} value={value}>
            <Checkbox checked={propertyTypes.indexOf(value) > -1} />
            <ListItemText primary={label} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default PropertyTypeSelect;
