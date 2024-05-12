"use client";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropertyCard from "./PropertyCard";
import NotFound from "./NotFound";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

export default function PropertyList({ properties, currentPage, totalPages, handlePageChange }) {
  if (!properties || properties.length === 0) {
    return <NotFound />;
  }
  return (
    <Grid container spacing={2}>
      {properties.map((property) => (
        <Grid key={property._id} sm={12} md={6}>
          <PropertyCard property={property} />
        </Grid>
      ))}
      <Grid xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination count={totalPages} page={currentPage} onChange={handlePageChange} sx={{ marginBottom: 2 }} />
      </Grid>
    </Grid>
  );
}
