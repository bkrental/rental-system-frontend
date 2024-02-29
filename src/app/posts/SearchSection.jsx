import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  grid-area: 1 / 1 / 3 / 10;
  background: blue;
`;

function SearchSection() {
  return (
    <StyledBox>
      <Box>SearchSection</Box>
    </StyledBox>
  );
}

export default SearchSection;
