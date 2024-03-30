"use client";

import PrivateRoute from "@/components/PrivateRoute";

const LandlordLayout = ({ children }) => {
  return <>{children}</>;
};

export default PrivateRoute(LandlordLayout);
