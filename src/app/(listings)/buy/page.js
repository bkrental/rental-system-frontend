"use client";
import PropertyList from "@/components/PropertyList";
import useGetPropertyTypes from "@/hooks/useGetPropertyTypes";
import { useGetPropertiesQuery } from "@/redux/features/properties/propertyApi";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";

export default function BuyPage() {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useQueryParam("page", withDefault(NumberParam, 1));

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  const searchParam = useSearchParams();
  const propertyTypes = useGetPropertyTypes();

  const supportedQuery = ["bp", "tp", "ba", "ta"];
  const queryObj = useMemo(() => {
    const res = {};
    searchParam.forEach((value, key) => {
      if (supportedQuery.includes(key)) {
        res[key] = value;
      }
    });
    console.log(res);
    return res;
  }, [searchParam]);

  const { data, error, isLoading } = useGetPropertiesQuery({
    page: currentPage,
    limit: pageSize,
    pt: propertyTypes,
    transaction_type: "rent",
    ...queryObj,
  });

  console.log(error);

  return (
    <>
      {isLoading && <h1>Loading</h1>}
      <PropertyList
        properties={data?.properties}
        totalPages={data?.pagination?.total_pages ?? 0}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
