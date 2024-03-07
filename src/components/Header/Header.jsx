"use client";

import { removeUserInfo } from "@redux/features/auth/authSlice";
import { changeUserMode } from "@redux/features/config/configSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/BaseComponents/Button";
import Link from "next/link";
import styles from "./Header.module.scss";
import UserProfileOption from "./UserProfileOption";

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const userMode = useSelector((state) => state.config.userMode);
  const user = useSelector((state) => state.auth.user);

  const handleChangeUserMode = (userMode) => {
    dispatch(changeUserMode(userMode));
  };

  const handleLogout = () => {
    console.log("logout");
    dispatch(removeUserInfo());
    dispatch(changeUserMode("tenant"));
    router.push("/");
  };

  const USER_MODES = ["tenant", "landlord"];

  return (
    <div className={styles.header}>
      <div className="flex flex-grap-32">
        <h5>
          <Link href="/">BKRental</Link>
        </h5>

        {user && (
          <div className="flex">
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
        )}
      </div>

      {!user ? (
        <div className="flex flex-gap-12">
          <Button variant="outlined" href="/auth/login">
            Login
          </Button>
          <Button variant="outlined" href="/auth/signup">
            Sign Up
          </Button>
        </div>
      ) : (
        <UserProfileOption user="Cong Dat" />
      )}
    </div>
  );
}

export default Header;
