"use client";
import Script from "next/script";

export default function ScriptProvider({ children }) {
  return (
    <>
      {children}
      <Script
        rel="stylesheet"
        src="https://cdn.jsdelivr.net/npm/@goongmaps/goong-js/dist/goong-js.css"
      />
    </>
  );
}
