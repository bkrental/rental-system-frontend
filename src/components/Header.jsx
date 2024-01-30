"use client";
import { useState } from "react";
import { Button, Grid, Box } from "@mui/material";

import {
  BaseContainer,
  BaseLink,
  BaseGridContainer,
  TitleTypo,
  SubtTitleTypo,
  StyledPage,
  BaseButton,
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

  .left-section {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // background-color: blue;
    gap: 32px;

    .tenant-landlord-option {
      display: flex;
      align-items: center;
      gap: 12px;

      
      .tenant-landlord-btn {
        background-color: none;
        color: ${({ theme }) => theme.palette.text.secondary};
      }
      
      .non-active-btn {
        // background-color: transparent;
        // box-shadow: none;
        color: ${({ theme }) => theme.palette.text.secondary};
      }
    }
  }

  .right-section {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: green;
`;

function Header() {
  const [curBtnVar, setCurBtnVar] = useState({
    tenant: "text",
    landlord: "contained",
  });

  const handleBtnOnClick = (e) => {
    console.log("heelo");
    console.log(e.currentTarget.getAttribute("data-value"));
    if (curBtnVar.tenant === "text") {
      setCurBtnVar({
        tenant: "contained",
        landlord: "text",
      });
    } else {
      setCurBtnVar({
        tenant: "text",
        landlord: "contained",
      });
    }
  };

  return (
    <HeaderContainer container className="nav-bar container">
      <HeaderItem>
        <Box className="left-section">
          <TitleTypo variant="h1">
            <BaseLink href="/">BKrental</BaseLink>
          </TitleTypo>
          <TenantLandlordOption
            handleBtnOnClick={handleBtnOnClick}
            curBtnVar={curBtnVar}
          />
        </Box>

        <Box className="right-section">
          <BaseButton variant="contained" color="primary">
            <SubtTitleTypo variant="h2">
              <BaseLink href="/auth/login">Login</BaseLink>
            </SubtTitleTypo>
          </BaseButton>
          <BaseButton variant="contained" color="primary">
            <SubtTitleTypo variant="h2">
              <BaseLink href="/auth/signup">Signup</BaseLink>
            </SubtTitleTypo>
          </BaseButton>
        </Box>
      </HeaderItem>
    </HeaderContainer>
  );
}

const TenantLandlordOption = ({ handleBtnOnClick, curBtnVar }) => {
  return (
    <BaseContainer className="tenant-landlord-option">
      <BaseButton
        variant={curBtnVar.tenant}
        className="tenant-landlord-btn non-active-btn"
        color="primary"
        data-value="tenant"
        onClick={handleBtnOnClick}
      >
        <SubtTitleTypo variant="h2" className="heeeeeeeeeeeee">
          <BaseLink href="/tenant">Tenant</BaseLink>
        </SubtTitleTypo>
      </BaseButton>
      <BaseButton
        variant={curBtnVar.landlord}
        className="tenant-landlord-btn"
        color="primary"
        data-value="landlord"
        onClick={handleBtnOnClick}
      >
        <SubtTitleTypo variant="h2">
          <BaseLink href="/landlord">Landlord</BaseLink>
        </SubtTitleTypo>
      </BaseButton>
    </BaseContainer>
  );
};

export default Header;
