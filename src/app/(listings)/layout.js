"use client";
import SearchBar from "@/components/SearchBar";
import SideBar from "@/components/SideBar";
import "@scss/listings.scss";

export default function PropertyLayout({ children }) {
  return (
    <div className="listings_container">
      <SearchBar />
      <div className="listings_main">{children}</div>
      <div className="listings_sidebar">
        <SideBar />
      </div>
    </div>
  );
}
