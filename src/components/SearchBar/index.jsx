"use client";

import { Stack, styled, TextField } from "@mui/material";
import { StringParam, useQueryParam } from "use-query-params";
import PriceSelect from "./PriceSelect";
import PropertyTypeSelect from "./PropertyTypeSelect";
import "./SearchBar.scss";
import AreaSelect from "./AreaSelect";
import AddressInput from "./AddressInput";

const SearchBarContainer = styled(Stack)(({ theme }) => ({
  position: "fixed",
  top: 70,
  flexDirection: "row",
  paddingBottom: theme.spacing(2),
  zIndex: 100,
  backgroundColor: "#fff",
  width: "100%",
  gap: theme.spacing(2),
}));

export default function SearchBar() {
  return (
    <SearchBarContainer>
      <AddressInput />

      <PropertyTypeSelect />
      <PriceSelect />
      <AreaSelect />
    </SearchBarContainer>
  );
}
