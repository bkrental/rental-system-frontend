import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  grid-column: 10 / 13;
  background: green;

  // align-self: start;
  height: calc(
    100vh - 24px - ${({ theme }) => theme.componentSize.header.height}
  );
  width: 270px;
`;

function FilterSection() {
  return <StyledBox>FilterSection</StyledBox>;
}

export default FilterSection;
