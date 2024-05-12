"use client";
import Header from "@/components/Header";
import PrivateRoute from "@/components/PrivateRoute";
import SideBar from "@/components/SideBar";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const LandlordLayout = ({ children }) => {
  return (
    <Stack direction="row">
      <SideBar />
      {children}
    </Stack>
  );
};

export default PrivateRoute(LandlordLayout);
