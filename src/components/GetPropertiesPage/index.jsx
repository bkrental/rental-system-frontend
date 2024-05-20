"use client";
import PropertyList from "./components/PropertyList";
import useGetPropertyTypes from "@/hooks/useGetPropertyTypes";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";
import Map from "@/components/GetPropertiesPage/components/Map";
import { Box, styled } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FullscreenLoading from "../FullscreenLoading";

const MapContainer = styled(Box)(({ theme }) => ({
  position: "sticky",
  width: "100%",
  height: "80vh",
  borderRadius: 2,
  overflow: "hidden",
  marginLeft: theme.spacing(2),
  top: 116,
}));

export default function GetPropertiesPage({ transaction_type = "rent" }) {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useQueryParam("page", withDefault(NumberParam, 1));

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0 });
  };

  const searchParam = useSearchParams();
  const propertyTypes = useGetPropertyTypes();
  const centerQs = searchParam.get("center");
  const center = centerQs ? centerQs.split(",").map((v) => parseFloat(v)) : [106.660172, 10.762622];

  const supportedQuery = ["bp", "tp", "ba", "ta", "center", "radius"];
  const queryObj = useMemo(() => {
    const res = {};
    searchParam.forEach((value, key) => {
      if (supportedQuery.includes(key)) {
        res[key] = value;
      }
    });
    return res;
  }, [searchParam]);

  const { data, error, isLoading } = useGetPropertiesQuery({
    page: currentPage,
    limit: pageSize,
    pt: propertyTypes,
    transaction: transaction_type,
    radius: 5,
    ...queryObj,
  });

  const markers = (data?.properties ?? []).map((p) => p.location.coordinates);
  console.log(markers);

  const propertyMarkers = (data?.properties ?? []).map((property) => ({
    coordinates: property.location.coordinates,
    name: property.name,
    price: property.price,
    image: property.thumbnail,
    id: property._id,
    displayed_address: property.displayed_address,
  }));

  return (
    <Grid container>
      <Grid xs={12} sm={6} md={7}>
        {isLoading ? (
          <FullscreenLoading loading={isLoading} />
        ) : (
          <PropertyList
            properties={data?.properties}
            totalPages={data?.pagination?.total_pages ?? 0}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        )}
      </Grid>
      <Grid xs={12} sm={6} md={5} sx={{ position: "relative" }}>
        <MapContainer>
          <Map center={center} markerList={propertyMarkers} />
        </MapContainer>
      </Grid>
    </Grid>
  );
}