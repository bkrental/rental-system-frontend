"use client";
import React from "react";
import { BaseGridContainer } from "@/components/BaseComponents";
import styled from "@emotion/styled";
import PrivateRoute from "@/components/PrivateRoute";

const StyledPage = styled(BaseGridContainer)`
  height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});
  // background: ${({ theme }) => theme.palette.background.page};
  background: blue;
`;

function LandlordPage() {
  return (
    <StyledPage>
      <h1>Landlord Page</h1>
    </StyledPage>
  );
}

export default PrivateRoute(LandlordPage);
