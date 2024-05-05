"use client";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import PropertyCard from "./PropertyCard";

export default function PropertyList({
  properties,
  currentPage,
  totalPages,
  handlePageChange,
}) {
  if (!properties || properties.length === 0) {
    return <p>There is no property suitable with your requirements</p>;
  }
  return (
    <Stack spacing={2} alignItems="center" mb={3}>
      <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
        {properties.map((property) => (
          <PropertyCard property={property} key={property._id} />
        ))}
      </Stack>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ marginBottom: 2 }}
      />
    </Stack>
  );
}
