import { SUPPORTED_PROPERTY_TYPES } from "@/constants/propertyTypes";
import clsx from "clsx";
import Dropdown from "../Dropdown";
import "./PropertyTypeDropdown.scss";
import { useEffect, useRef } from "react";

export default function PropertyTypeDropdown({
  propertyType,
  setPropertyType,
  handleSubmit,
}) {
  const didMount = useRef(false);
  const handleOptionSelect = (propertyType) => {
    setPropertyType(propertyType);
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }

    handleSubmit();
  }, [propertyType]);

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
          onClick={() => handleOptionSelect(propType)}
        >
          {propType.Icon && <propType.Icon />}
          {propType.label}
        </div>
      ))}
    </Dropdown>
  );
}
