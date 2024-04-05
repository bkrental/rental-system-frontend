"use client";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

export default function PropertyLayout({ children }) {
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} columns={10}>
        <Grid item xs={10}>
          <SearchBar />
        </Grid>

        <Grid item xs={7}>
          {children}
        </Grid>
        <Grid item xs={3}>
          <SideBar />
        </Grid>
      </Grid>
    </Container>
  );
}
