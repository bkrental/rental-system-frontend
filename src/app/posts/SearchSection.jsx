import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  height: 100px;
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
