"use client"
import { useState, useRef, useEffect } from 'react';
import {
  Grid,
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Headline01,
  Description01,
  BaseContainer,
  BaseGridContainer,
  BaseLink,
} from '@components/BaseComponents';
import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import bannerAuth from '@public/banner-auth.svg';

import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, removeUserInfo } from '@/redux/features/auth/authSlice';
import { useLoginMutation } from '@/redux/features/auth/authApiSlice';

const LoginContainer = styled(BaseGridContainer)`
  height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});
  background: ${({ theme }) => theme.palette.background.page};
`;

const LoginItem = styled(BaseContainer)`
  grid-column: span 6;
`

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
`

const LoginImageSection = styled(BaseContainer)`
  grid-column: 7 / 13;
  // grid-row: span 2;
  // background-color: green;

  .banner-auth {
    width: 80%;
    height: 80%;
  }
`


function LoginPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [loginInfo, setLoginInfo] = useState({
    phone: '',
    password: ''
  });
  const [login, { isLoading, error }] = useLoginMutation();
  const [errMsg, setErrMsg] = useState('');


  useEffect(() => {
    setErrMsg('');
  }, [loginInfo]);


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(loginInfo);
      console.log("handleLoginSubmit", userData);

      if (userData.data) {
        dispatch(setUserInfo(userData.data.data));
        setLoginInfo({
          phone: '',
          password: ''
        })
        router.push('/');
      }

    } catch (err) {
      console.log(err);
    }
  }

  const handleUserInput = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value
    });
  }

  return (
    <LoginContainer className="login-container">
      <LoginForm>
        <Avatar className='login-avatar'>
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
            label="password"
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
                <Link href="" variant="body2">Forgot password?</Link>
              </Description01>
            </Grid>
            <Grid item>
              <Description01 variant="body2">
                Don't have an account? <Link href="/auth/signup" variant="body2">{" Sign Up"}</Link>
              </Description01>
            </Grid>
          </Grid>
        </Box>
      </LoginForm>
      <LoginImageSection>
        <Image src={bannerAuth} className='banner-auth' alt="banner " />
      </LoginImageSection>
    </LoginContainer>
  );
}

export default LoginPage;
