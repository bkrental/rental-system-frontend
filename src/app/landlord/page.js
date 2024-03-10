"use client";
import React from "react";
import PrivateRoute from "@/components/PrivateRoute";

function LandlordPage() {
  return <h1>Landlord Page</h1>;
}

export default PrivateRoute(LandlordPage);
