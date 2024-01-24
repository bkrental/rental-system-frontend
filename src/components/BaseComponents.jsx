import styled from "@emotion/styled";
import { Container, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

export const BaseContainer = ({
  maxWidth = false,
  disableGutter = true,
  children,
}) => {
  return (
    <Container maxWidth={maxWidth} disableGutter>
      {children}
    </Container>
  );
};

export const BaseLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const TitleTypo = styled(Typography)`
  font-size: 42px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0.17px;
  text-transform: capitalize;
`;

export const SubtTitleTypo = styled(Typography)`
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; 
  letter-spacing: 0.17px;
  text-transform: capitalize;
`;

export const Headline01 = styled(Typography)`
  font-size: 55px;
  font-style: normal;
  font-weight: 600;
  line-height: 118.7%; 
  letter-spacing: -1.5px;
  text-transform: capitalize;
`;
