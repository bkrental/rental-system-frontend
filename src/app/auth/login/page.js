"use client"
import {
  Grid
} from '@mui/material';
import {
  StyledPage,
  Headline01,
  BaseContainer,
  BaseGridContainer,
} from '@components/BaseComponents';
import styled from '@emotion/styled';

const LoginContainer = styled(BaseGridContainer)`
  height: 1000px;
  background: ${({theme})=> theme.palette.background.page};
`;

const LoginItem = styled(BaseContainer)`
  // grid-column: ;
`

function LoginPage() {
  return (
    <LoginContainer className="login-container">

      <Headline01>Login</Headline01>
    </LoginContainer>
  );
}

export default LoginPage;