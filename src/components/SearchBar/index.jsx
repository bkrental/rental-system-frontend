"use client";

import { Stack, TextField } from "@mui/material";
import { StringParam, useQueryParam } from "use-query-params";
import PriceSelect from "./PriceSelect";
import PropertyTypeSelect from "./PropertyTypeSelect";
import "./SearchBar.scss";
import AreaSelect from "./AreaSelect";

export default function SearchBar() {
  const [keyword, setKeyword] = useQueryParam("q", StringParam);

  return (
    <Stack direction="row" spacing={2}>
      <TextField
        size="small"
        placeholder="Enter the keyword to search for properties"
        id="keyword-input"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <PropertyTypeSelect />
      <PriceSelect />
      <AreaSelect />
    </Stack>
  );
}
