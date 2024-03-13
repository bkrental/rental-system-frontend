"use client";

import "@scss/header.scss";
import Link from "next/link";
import { useSelector } from "react-redux";
import HeaderLink from "./HeaderLink";
import HeaderProfile from "./HeaderProfile";

function Header() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="header">
      <Link className="header_logo" href="/">
        <h5>BKRental</h5>
      </Link>

      <div className="header_navbar">
        <HeaderLink href="/rent">Rent</HeaderLink>
        <HeaderLink href="/buy">Buy</HeaderLink>
      </div>

      <Link className="header_link" href="/signup">
        Post a property
      </Link>

      {!user ? (
        <div className="header_button-group">
          <Link className="header_link header_link--primary" href="/login">
            Log In
          </Link>
          <Link className="header_link header_link--primary" href="/signup">
            Sign Up
          </Link>
        </div>
      ) : (
        <HeaderProfile />
      )}
    </div>
  );
}

export default Header;
