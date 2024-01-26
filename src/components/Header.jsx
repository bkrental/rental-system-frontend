"use client";
import React from "react";
import {
  Button,
  Typography,
} from "@mui/material";

import {
  BaseContainer,
  BaseLink,
  TitleTypo
} from "./BaseComponents";
import Link from "next/link";
import styled from "@mui/system/styled";


const StyledContainer = styled(BaseContainer)`
  background-color: yellow;
  padding: 0;
  margin: 0;
  width: 100vw;
  max-width: false;
`



function Header() {
  return (
    <StyledContainer>
      <Button variant="contained" color="complementary">
        {/* <Link href="/">
          <Typography variant="h1">BKrental</Typography>
        </Link> */}
        <TitleTypo variant="h1">
          <BaseLink href="/">BKrental</BaseLink>
        </TitleTypo>
      </Button>
      <Button variant="contained" color="primary">
        <Link href="/auth/login">
          Login
        </Link>
      </Button>
      <Button variant="contained" color="primary">
        <Link href="/auth/signup">Signup</Link>
      </Button>
    </StyledContainer>
  );
}

export default Header;
