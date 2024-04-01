"use client";
import PropertyCard from "./PropertyCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export default function PropertyList({ properties }) {
  const pageSize = 6;
  const totalPages = Math.ceil(properties.length / pageSize);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startIndex = (currentPage - 1) * pageSize;

  if (!properties || properties.length === 0) {
    return <p>There is no property suitable with your requirements</p>;
  }
  return (
    <Stack spacing={2} alignItems="center" mb={3}>
      <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap">
        {properties.slice(startIndex, startIndex + pageSize).map((property) => (
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
