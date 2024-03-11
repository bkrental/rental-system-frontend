import "@scss/header.scss";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderLink({ href, children }) {
  const pathname = usePathname();
  const linkPath = href.split("?")[0];

  return (
    <Link
      className={clsx(
        "header_navbar-item",
        pathname == linkPath && "header_navbar-item--active"
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
