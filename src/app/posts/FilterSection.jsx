import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  grid-column: 10 / 13;
  background: green;

  // align-self: start;
  // position: fixed;
`;

function FilterSection() {
  return <StyledBox>FilterSection</StyledBox>;
}

export default FilterSection;
