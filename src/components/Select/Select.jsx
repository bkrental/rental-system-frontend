"use client";
import { ArrowDropDownOutlined, CleaningServices } from "@mui/icons-material";
import clsx from "clsx";
import "@scss/properties.scss";
import styles from "./Select.module.scss";
import { useEffect, useRef, useState } from "react";

export default function Select({ name, title, DropdownComponent, value }) {
  const selectElement = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => setIsActive((prev) => !prev);

  useEffect(() => {
    if (!isActive) return;
    // Turn off dropdown when click outside of the dropdown
    const handleClickOutside = (e) => {
      if (selectElement.current.contains(e.target)) {
        return;
      }
      toggleDropdown();
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div
      key={name}
      ref={selectElement}
      className={clsx(styles.container, isActive && styles.containerActive)}
    >
      <div className={styles.select} onClick={toggleDropdown}>
        <div className={styles.selectName}>{title}</div>
        <div className={styles.selectValue}>{value}</div>
        <ArrowDropDownOutlined
          className={styles.selectIcon}
          sx={{ fontSize: 25 }}
        />
      </div>
      {isActive && <DropdownComponent />}
    </div>
  );
}
