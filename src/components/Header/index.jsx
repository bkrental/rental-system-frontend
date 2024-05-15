"use client";
import NextLink from "next/link";
import { useSelector } from "react-redux";
// import HeaderLink from "./HeaderLink";
import { Avatar, Box, Button, Container, Link, Stack, styled, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useState, useMemo } from "react";
import AccountMenu from "./components/AccountMenu";

const HeaderLink = ({ children, ...props }) => (
  <Link component={NextLink} underline="none" {...props}>
    {children}
  </Link>
);

const HeaderWrapper = styled((props) => <Container maxWidth="xl" {...props} />)(({ theme }) => ({
  height: "60px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  position: "fixed",
  zIndex: 1000,
  backgroundColor: "white",
  boxShadow: "rgba(239, 108, 0, 0.1) 0px 0px 10px 0px",
}));

function Header() {
  const router = useRouter();
  const user = useSelector((state) => state.auth.user);
  const userName = useMemo(() => user?.name || "User", [user]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <HeaderWrapper>
        <Stack direction="row" spacing={3} alignItems="center">
          <HeaderLink href="/" sx={{ fontSize: 28, fontWeight: 600, width: 120 }}>
            BKRental
          </HeaderLink>
          <HeaderLink fontSize={20} href="/rent" color="inherit">
            Rent
          </HeaderLink>
          <HeaderLink fontSize={20} href="/buy" color="inherit">
            Buy
          </HeaderLink>
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button onClick={() => router.push("/landlord")} size="large" color="inherit">
            Post a property
          </Button>

          {user ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{
                border: 1,
                borderColor: grey[300],
                px: 1,
                borderRadius: 2,
                cursor: "pointer",
              }}
              onClick={handleClick}
            >
              <Avatar sx={{ width: 30, height: 30 }}>{userName[0].toUpperCase()}</Avatar>
              <Typography>{userName}</Typography>
            </Stack>
          ) : (
            <Button onClick={() => router.push("/login")} variant="outlined">
              Sign Up or Login
            </Button>
          )}
        </Stack>
        <AccountMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
      </HeaderWrapper>
      <Box sx={{ width: "100%", height: "60px" }}></Box>
    </>
  );
}

export default Header;
