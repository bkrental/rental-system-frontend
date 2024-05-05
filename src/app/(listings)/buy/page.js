"use client";
import PropertyList from "@/components/PropertyList";
import { useEffect, useState } from "react";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";

export default function BuyPage() {
  const [properties, setProperties] = useState([]);
  const pageSize = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useQueryParam(
    "page",
    withDefault(NumberParam, 1)
  );

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const getProperties = async () => {
      const baseURL = process.env.NEXT_PUBLIC_RENTAL_SERVICE_BACKEND_ENDPOINT;
      const res = await fetch(
        `${baseURL}/posts?page=${currentPage}&limit=${pageSize}`
      );

      if (!res.ok) {
        console.error("Failed to fetch properties");
        return;
      }

      const { data, pagination } = await res.json();
      return [data, pagination];
    };

    getProperties().then(([posts, pagination]) => {
      setProperties(posts);
      setTotalPages(pagination.total_pages);
    });
  }, [currentPage]);

  return (
    <PropertyList
      properties={properties}
      totalPages={totalPages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
}
