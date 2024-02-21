"use client";
import { useState, useEffect } from "react";
import TenantLandlordOption from "@components/Header/TenantLandlordOption";
import LoginOption from "@components/Header/LoginOption";
import UserProfileOption from "@components/Header/UserProfileOption";
import { Button, Grid, Box, Avatar } from "@mui/material";
import {
  BaseContainer,
  BaseLink,
  BaseGridContainer,
  TitleTypo,
} from "../BaseComponents";

import { changeUserMode } from "@redux/features/config/configSlice";
import { removeUserInfo } from "@redux/features/auth/authSlice";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

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

      .tenant-landlord-btn{
          color: ${({ theme }) => theme.palette.text.secondary};
        &:hover, &.active{
          background-color: ${({ theme }) => theme.palette.primary.main};
          color: ${({ theme }) => theme.palette.text.active};
        } 
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
  const dispatch = useDispatch();
  const router = useRouter();
  const userMode = useSelector((state) => state.config.userMode);
  const user = useSelector((state) => state.auth.user);
  console.log("user", user?.name);
  const avatarName = user?.name[0];
  const [isActive, setIsActive] = useState({
    tenant: true,
    landlord: false,
  });
  const [btnType, setBtnType] = useState({
    tenant: "contained",
    landlord: "text",
  });

  useEffect(() => {
    if (userMode == "tenant") {
      setIsActive({
        tenant: "active",
        landlord: "",
      });
      setBtnType({
        tenant: "contained",
        landlord: "text",
      });
    } else {
      setIsActive({
        tenant: "",
        landlord: "active",
      });
      setBtnType({
        tenant: "text",
        landlord: "contained",
      });
    }
  }, [userMode]);

  const handleChangeUSerMode = (e) => {
    const btnClicked = e.currentTarget.getAttribute("data-value");
    dispatch(changeUserMode(btnClicked));
  };

  const handleLogout = () => {
    console.log("logout");
    dispatch(removeUserInfo());
    dispatch(changeUserMode("tenant"));
    router.push("/");
  };

  return (
    <HeaderContainer container className="nav-bar container">
      <HeaderItem>
        <Box className="left-section">
          <TitleTypo variant="h1">
            <BaseLink href="/">BKrental</BaseLink>
          </TitleTypo>
          <TenantLandlordOption
            handleBtnOnClick={handleChangeUSerMode}
            isActive={isActive}
            btnType={btnType}
          />
        </Box>

        <Box className="right-section">
          {user ? (
            <UserProfileOption handleLogout={handleLogout} user={user} />
          ) : (
            <LoginOption />
          )}
        </Box>
      </HeaderItem>
    </HeaderContainer>
  );
}

export default Header;
