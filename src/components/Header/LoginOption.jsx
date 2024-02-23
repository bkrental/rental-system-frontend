"use client";
import {
  BaseContainer,
  BaseLink,
  BaseButton,
  SubtTitleTypo,
} from "@components/BaseComponents";

function LoginOption() {
  return (
    <BaseContainer className="login-option">
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
    </BaseContainer>
  );
}

export default LoginOption;
