import { getPropertyTypeLabel } from "@/utils/getPropertyTypesLabel";
import { useMemo } from "react";
import styles from "./Dropdown.module.scss";
const { useDispatch, useSelector } = require("react-redux");
const {
  setPropertyType,
  togglePropertyType,
} = require("@/redux/features/filter/filterSlice");
import { SUPPORTED_PROPERTY_TYPES } from "@/constants";

export default function PropertyTypeDropdown() {
  const dispatch = useDispatch();
  const selectedPropertyTypes = useSelector((s) => s.filter.property_type);
  const isSelectedAll = useMemo(
    () => selectedPropertyTypes.includes("all"),
    [selectedPropertyTypes]
  );

  const toggleAll = () => {
    if (isSelectedAll) {
      dispatch(setPropertyType([]));
    } else {
      dispatch(
        setPropertyType([...Object.keys(SUPPORTED_PROPERTY_TYPES), "all"])
      );
    }
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.option} onClick={toggleAll}>
        <input type="checkbox" checked={isSelectedAll} />
        All
      </div>

      {Object.keys(SUPPORTED_PROPERTY_TYPES).map((propertyType) => (
        <div
          key={propertyType}
          className={styles.option}
          onClick={() => dispatch(togglePropertyType(propertyType))}
        >
          <input
            type="checkbox"
            checked={selectedPropertyTypes.includes(propertyType)}
          />
          {getPropertyTypeLabel(propertyType)}
        </div>
      ))}
    </div>
  );
}
