import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import clsx from "clsx";
import Dropdown from "../Dropdown";
import "./PropertyTypeDropdown.scss";

export default function PropertyTypeDropdown({
  propertyType,
  setPropertyType,
}) {
  return (
    <Dropdown>
      {SUPPORTED_PROPERTY_TYPES.map((propType) => (
        <div
          key={propType.value}
          className={clsx(
            "pt-dropdown-option",
            propertyType.value === propType.value &&
              "pt-dropdown-option--highlight"
          )}
          onClick={() => setPropertyType(propType)}
        >
          {propType.label}
        </div>
      ))}
    </Dropdown>
  );
}
