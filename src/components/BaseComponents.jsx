import styled from "@emotion/styled";
import { Container, Grid, Box, Typography } from "@mui/material";
import Link from "next/link";

export const BaseContainer = ({
  maxWidth = false,
  disableGutters = false,
  children,
  ...otherProps
}) => {
  return (
    <Container maxWidth={maxWidth} disableGutters={disableGutters} {...otherProps}>
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

export const StyledPage = styled(BaseContainer)`
  background: ${({ theme }) => theme.palette.background.page};
  padding: 0;
  margin: 0;
`

export const BaseGridContainer = styled(Grid)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 32px;
  padding: 0 64px;
`

