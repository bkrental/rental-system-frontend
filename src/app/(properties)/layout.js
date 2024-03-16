"use client";
import SearchBar from "@/components/SearchBar";
import "@scss/listings.scss";

export default function PropertyLayout({ children }) {
  return (
    <div className="property_container">
      <SearchBar />
      <div className="property_listings">{children}</div>
      <div className="property_sidebar">Filter section</div>
    </div>
  );
}
