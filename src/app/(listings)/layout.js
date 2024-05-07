"use client";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function PropertyLayout({ children }) {
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
      <Grid container spacing={2} columns={12}>
        <Grid xs={12}>
          <SearchBar />
        </Grid>

        <Grid xs={9}>{children}</Grid>
        <Grid xs={3}>{/* <SideBar /> */}</Grid>
      </Grid>
    </Container>
  );
}
