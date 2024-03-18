"use client";
import useDropdown from "@/hooks/useDropdown";
import { ArrowDropDown } from "@mui/icons-material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import HeaderProfileDropDown from "./HeaderProfileDropdown";

export default function HeaderProfile() {
  const [dropdownRef, isDropdownOpened, toggleDropdownOpened] = useDropdown();
  const user = useSelector((s) => s.auth.user);
  const userName = useMemo(() => user?.name || "User", [user]);

  return (
    <div
      ref={dropdownRef}
      className="header_profile"
      onClick={toggleDropdownOpened}
    >
      <div className="header_profile-avatar">{userName[0].toUpperCase()}</div>
      <p className="header_profile-name">{user?.name || "User"}</p>
      <ArrowDropDown sx={{ fontSize: 30 }} />
      {isDropdownOpened && <HeaderProfileDropDown />}
    </div>
  );
}
