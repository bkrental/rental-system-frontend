import { SUPPORTED_PROPERTY_TYPES } from "@/constants";

export function getPropertyTypeLabel(propType) {
  return SUPPORTED_PROPERTY_TYPES[propType];
}

export default function getPropertyTypeLabels(propertyTypes) {
  if (propertyTypes.includes("all") || propertyTypes.length === 0) return "All";
  return propertyTypes.map((type) => SUPPORTED_PROPERTY_TYPES[type]).join(", ");
}
