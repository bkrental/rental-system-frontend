"use client";
import React from "react";
import { Button, Grid } from "@mui/material";

import {
  BaseContainer,
  BaseLink,
  BaseGridContainer,
  TitleTypo,
  SubtTitleTypo,
  StyledPage,
} from "./BaseComponents";
import styled from "@emotion/styled";

const HeaderContainer = styled(BaseGridContainer)`
  height: ${({ theme }) => theme.componentSize.header.height};
  background-color: ${({ theme }) => theme.palette.background.default};
  // background-color: yellow;

  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderItem = styled(BaseContainer)`
  grid-column: span 12;

  // background-color: red;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <HeaderContainer container className="nav-bar container">
      <HeaderItem>
        <Button variant="contained" color="complementary">
          <TitleTypo variant="h1">
            <BaseLink href="/">BKrental</BaseLink>
          </TitleTypo>
        </Button>
        <Button variant="contained" color="primary">
          <SubtTitleTypo variant="h2">
            <BaseLink href="/auth/login">Login</BaseLink>
          </SubtTitleTypo>
        </Button>
        <Button variant="contained" color="primary">
          <SubtTitleTypo variant="h2">
            <BaseLink href="/auth/signup">Signup</BaseLink>
          </SubtTitleTypo>
        </Button>
      </HeaderItem>
    </HeaderContainer>
  );
}

export default Header;
