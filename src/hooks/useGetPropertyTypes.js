import { PROPERTY_TYPES } from "@/constants/propertyTypes";
import _ from "lodash";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { useQueryParam } from "use-query-params";

export default function useGetPropertyTypes() {
  const searchParam = useSearchParams();
  const propertyTypesQuery = searchParam.getAll("pt") ?? [];
  const propertyTypes = useMemo(() =>
    propertyTypesQuery ? _.intersection(Object.keys(PROPERTY_TYPES), propertyTypesQuery) : []
  );
  return propertyTypes;
}
