"use client";
import AddressDropdown from "@/components/Property/AddressDropdown";
import PriceDropdown from "@/components/Property/PriceDropdown";
import {
  ArrowDownwardOutlined,
  ArrowDropDownCircleOutlined,
  ArrowDropDownOutlined,
  RotateLeftOutlined,
  SearchOutlined,
  CachedOutlined,
} from "@mui/icons-material";
import "@scss/listings.scss";
import clsx from "clsx";
import { Field, Formik, Form } from "formik";
import { useEffect, useRef, useState } from "react";

const formSelectConfigs = [
  {
    name: "address",
    title: "Address",
    DropdownComponent: AddressDropdown,
  },
  {
    name: "price",
    title: "Price",
    DropdownComponent: PriceDropdown,
  },
  {
    name: "property_type",
    title: "Property Type",
    DropdownComponent: AddressDropdown,
  },
];

export default function PropertyLayout({ children }) {
  const [dropdown, setDropdown] = useState("address");

  const toggleDropdown = (dropdownName, opening) => {
    if (dropdownName == opening) {
      setDropdown("");
      return;
    }

    setDropdown(dropdownName);
  };

  useEffect(() => {
    // Turn off dropdown when click outside of the dropdown
    const handleClickOutside = (e) => {
      if (e.target.closest(".property_topbar-form-item")) {
        return;
      }
      setDropdown("");
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="property_container">
      <div className="property_topbar">
        <form className="property_topbar-form">
          <div className="property_topbar-form-keyword">
            <input
              className="property_topbar-input"
              placeholder="Search by keyword, district or nearby location"
            />
            {/* <SearchOutlined
              className="property_topbar-form-icon"
              sx={{ fontSize: 25 }}
            /> */}
          </div>

          {formSelectConfigs.map(({ name, title, DropdownComponent }) => (
            <div
              key={name}
              className={clsx(
                "property_topbar-form-item",
                name == dropdown && "property_topbar-form-item--active"
              )}
            >
              <div onClick={(e) => toggleDropdown(name, dropdown)}>
                <div className="property_topbar-select">{title}</div>
                <ArrowDropDownOutlined
                  className="property_topbar-form-icon"
                  sx={{ fontSize: 25 }}
                />
              </div>
              {dropdown == name && <DropdownComponent />}
            </div>
          ))}

          <div className="property_topbar-form-action-btn">
            <div className="property_topbar-form-btn">
              <SearchOutlined sx={{ fontSize: 20 }} />
              Search
            </div>
            <div className="property_topbar-form-btn property_topbar-form-btn--reset">
              <CachedOutlined sx={{ fontSize: 20 }} />
              {/* Reset */}
            </div>
          </div>
        </form>
      </div>
      <div className="property_listings">{children}</div>
      <div className="property_sidebar">Filter section</div>
    </div>
  );
}
