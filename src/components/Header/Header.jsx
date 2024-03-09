"use client";

import { removeUserInfo } from "@redux/features/auth/authSlice";
import { changeUserMode } from "@redux/features/config/configSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/BaseComponents/Button";
import Link from "next/link";
import UserProfileOption from "./UserProfileOption";
import "@scss/header.scss";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userMode = useSelector((state) => state.config.userMode);
  const user = useSelector((state) => state.auth.user);

  const handleChangeUserMode = (userMode) => {
    dispatch(changeUserMode(userMode));
    router.push(userMode == "tenant" ? "/" : "/landlord");
  };

  const handleLogout = () => {
    console.log("logout");
    dispatch(removeUserInfo());
    dispatch(changeUserMode("tenant"));
    router.push("/");
  };

  const USER_MODES = ["tenant", "landlord"];

  return (
    <div className="header">
      <div className="header_mode-group">
        <Link className="header_logo" href="/">
          <h5>BKRental</h5>
        </Link>

        <div className="header_button-group">
          {USER_MODES.map((mode) => (
            <Button
              key={mode}
              variant={userMode == mode ? "default" : "text"}
              color={userMode == mode ? "primary" : "dark"}
              onClick={(e) => handleChangeUserMode(mode)}
            >
              {mode}
            </Button>
          ))}
        </div>
      </div>

      {!user ? (
        <div className="header_button-group">
          <Button variant="outlined" href="/login">
            Login
          </Button>
          <Button variant="outlined" href="/signup">
            Sign Up
          </Button>
        </div>
      ) : (
        <UserProfileOption onClick={handleLogout} user="Cong Dat" />
      )}
    </div>
  );
}

export default Header;
