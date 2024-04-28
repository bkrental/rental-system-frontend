"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

export default function PrivateRoute(Component) {
  return function ProtectedComponent(props) {
    const router = useRouter();
    const pathname = usePathname();
    const accessToken = useSelector((state) => state.auth.accessToken);

    useEffect(() => {
      if (!accessToken) {
        router.replace(`/login?returnURL=${pathname}`);
      }
    }, [accessToken, pathname, router]);

    if (!accessToken)
      return <ClipLoader loading={true} color="#fff" size={20} />;

    return <Component {...props} />;
  };
}
