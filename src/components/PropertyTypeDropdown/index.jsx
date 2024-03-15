import { SUPPORTED_PROPERTY_TYPES } from "@/constants";
import getPropertyTypeLabel from "@/utils/getPropertyTypeLabel";
import Dropdown from "../Dropdown";
import styles from "./PropertyTypeDropdown.module.scss";
import clsx from "clsx";
const { useDispatch, useSelector } = require("react-redux");
const { setPropertyType } = require("@/redux/features/filter/filterSlice");

export default function PropertyTypeDropdown() {
  const dispatch = useDispatch();
  const selected = useSelector((s) => s.filter.property_type);

  return (
    <Dropdown>
      {Object.keys(SUPPORTED_PROPERTY_TYPES).map((type) => (
        <div
          key={type}
          className={clsx(
            styles.option,
            selected == type && styles.optionHighlight
          )}
          onClick={() => dispatch(setPropertyType(type))}
        >
          {getPropertyTypeLabel(type)}
        </div>
      ))}
    </Dropdown>
  );
}
