"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

export default function PrivateRoute(Component) {
  return function () {
    const router = useRouter();
    const pathname = usePathname();
    const accessToken = useSelector((state) => state.auth.accessToken);

    useEffect(() => {
      if (!accessToken) {
        router.replace(`/login?returnURL=${pathname}`);
      }
    }, []);

    if (!accessToken)
      return <ClipLoader loading={true} color="#fff" size={20} />;

    return <Component />;
  };
}
