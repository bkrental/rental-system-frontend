"use client";
import Header from "@/components/Header";
import PrivateRoute from "@/components/PrivateRoute";
import ProtectedRoute from "@/components/ProtectedRoute";
import SideBar from "@/components/SideBar";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const LandlordLayout = ({ children }) => {
  return (
    <ProtectedRoute>
      <Stack direction="row">
        <SideBar />
        {children}
      </Stack>
    </ProtectedRoute>
  );
};

export default LandlordLayout;
