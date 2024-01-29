"use client"
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
import Image from 'next/image';
import bannerAuth from '@public/banner-auth.svg';

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
            name="phone-number"
            autoComplete="phone-number"
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
          >
            Sign In
          </Button>
          <Grid container>
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
          {/* <Copyright sx={{ mt: 5 }} />   */}
        </Box>
      </LoginForm>
      <LoginImageSection>
        {/* <Headline01>Image</Headline01> */}
        <Image src={bannerAuth} className='banner-auth' alt="banner " />
      </LoginImageSection>
    </LoginContainer>
  );
}

export default LoginPage;
