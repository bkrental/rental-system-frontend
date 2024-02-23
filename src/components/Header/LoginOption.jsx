"use client";
import {
  BaseContainer,
  BaseLink,
  BaseButton,
  SubtTitleTypo,
} from "@components/BaseComponents";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  display: flex;
  gap: 12px;

  .login-btn {
    // background-color: blue;
    color: ${({ theme }) => theme.palette.text.secondary};
    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.palette.primary.main};
      color: ${({ theme }) => theme.palette.text.active};
    }
  }
`;

function LoginOption() {
  return (
    <BaseContainer>
      <StyledBox className="login-option">
        <BaseLink href="/auth/login">
          <BaseButton variant="text" className="login-btn">
            <SubtTitleTypo variant="h2">Login</SubtTitleTypo>
          </BaseButton>
        </BaseLink>
        <BaseLink href="/auth/signup">
          <BaseButton variant="text" className="login-btn">
            <SubtTitleTypo variant="h2">Signup</SubtTitleTypo>
          </BaseButton>
        </BaseLink>
      </StyledBox>
    </BaseContainer>
  );
}

export default LoginOption;
