"use client";
import { useState, useRef, useEffect } from "react";
import { Grid, Avatar, FormControlLabel, Checkbox, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Headline01,
  Description01,
  BaseContainer,
  BaseGridContainer,
  BaseLink,
} from "@components/BaseComponents";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerSvg from "@public/auth-banner.svg";

import { useDispatch, useSelector } from "react-redux";
import { setUserInfo, removeUserInfo } from "@/redux/features/auth/authSlice";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import styles from "@scss/LoginPage.module.scss";
import { Person2Outlined, PersonOutlineOutlined } from "@mui/icons-material";
import TextField from "@/components/BaseComponents/TextField";
import Button from "@/components/BaseComponents/Button";

const LoginContainer = styled(BaseGridContainer)`
  height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});
  background: ${({ theme }) => theme.palette.background.page};
`;

const LoginItem = styled(BaseContainer)`
  grid-column: span 6;
`;

const LoginForm = styled(BaseContainer)`
  grid-column: 2 / 7;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .login-avatar {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  .not-have-account {
    display-flex: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
  }
`;

const LoginImageSection = styled(BaseContainer)`
  grid-column: 7 / 13;
  // grid-row: span 2;
  // background-color: green;

  .banner-auth {
    width: 80%;
    height: 80%;
  }
`;

function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    phone: "",
    password: "",
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const [errMsg, setErrMsg] = useState("");
  console.log("loginInfo:", loginInfo);

  useEffect(() => {
    setErrMsg("");
  }, [loginInfo]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(loginInfo);
      console.log("userData:", userData);
      if (userData.data) {
        dispatch(setUserInfo(userData.data.data));
        setLoginInfo({
          phone: "",
          password: "",
        });
        router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUserInput = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className="flex">
          <div className={styles.icon}>
            <LockOutlinedIcon sx={{ fontSize: 26, color: "#fff" }} />
          </div>
          <h3>Login</h3>
        </div>
        <form className={styles.form}>
          <TextField
            iconStart={
              <PersonOutlineOutlined
                sx={{ fontSize: 28, color: "#555" }}
                className={styles.formStartIcon}
              />
            }
            placeholder="Phone Number*"
            className={styles.formInput}
          />
          <TextField
            iconStart={
              <LockOutlinedIcon
                sx={{ fontSize: 28, color: "#555" }}
                className={styles.formStartIcon}
              />
            }
            placeholder="Password*"
            className={styles.formInput}
          />
        </form>

        <Button>Login</Button>
      </div>
      <div className={styles.right}>
        <Image src={bannerSvg} className="banner-auth" alt="banner " />
      </div>
      {/* <LoginForm>
        <Avatar className="login-avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Headline01 component="h1" variant="h5">
          Login
        </Headline01>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone-number"
            label="Phone Number"
            name="phone"
            autoComplete="phone-number"
            onChange={handleUserInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleUserInput}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleLoginSubmit}
          >
            Sign In
          </Button>
          <Grid container className="not-have-account">
            <Grid item>
              <Description01 variant="body2">
                <Link href="" variant="body2">
                  Forgot password?
                </Link>
              </Description01>
            </Grid>
            <Grid item>
              <Description01 variant="body2">
                Don't have an account?{" "}
                <Link href="/auth/signup" variant="body2">
                  {" Sign Up"}
                </Link>
              </Description01>
            </Grid>
          </Grid>
        </Box>
      </LoginForm>
      <LoginImageSection>
        <Image src={bannerAuth} className="banner-auth" alt="banner " />
      </LoginImageSection> */}
    </div>
  );
}

export default LoginPage;
