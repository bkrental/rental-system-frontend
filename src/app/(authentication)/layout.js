import Image from "next/image";
import banner from "@public/auth-banner.svg";
import "@scss/authentication.scss";

export default function AuthLayout({ children }) {
  return (
    <div className="auth_container">
      <div className="auth_banner">
        <Image priority={true} src={banner} alt="banner" />
      </div>

      <div className="auth_content">{children}</div>
    </div>
  );
}
