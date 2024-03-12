"use client";
import { ArrowDropDown } from "@mui/icons-material";
import HeaderProfileDropDown from "./HeaderProfileDropdown";
import { useState } from "react";

export default function HeaderProfile() {
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  return (
    <div
      className="header_profile"
      onMouseOver={() => setIsDropdownOpened(true)}
      onMouseLeave={() => setIsDropdownOpened(false)}
    >
      <div className="header_profile-avatar">D</div>
      <p className="header_profile-name">Dat Nguyen</p>
      <ArrowDropDown sx={{ fontSize: 30 }} />
      {isDropdownOpened && <HeaderProfileDropDown />}
    </div>
  );
}
