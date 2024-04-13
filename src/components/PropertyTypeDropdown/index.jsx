import { PROPERTY_TYPE_DETAILS } from "@/constants/propertyTypes";
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
    <div className="propertyType_dropdown">
      {PROPERTY_TYPE_DETAILS.map((propType) => (
        <div
          key={propType.value}
          className={clsx(
            "propertyType_option",
            propertyType.value === propType.value &&
              "propertyType_option--highlight"
          )}
          onClick={() => handleOptionSelect(propType)}
        >
          {propType.Icon && <propType.Icon />}
          {propType.label}
        </div>
      ))}
    </div>
  );
}
