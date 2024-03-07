"use client";

import { removeUserInfo } from "@redux/features/auth/authSlice";
import { changeUserMode } from "@redux/features/config/configSlice";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

import Button from "@components/Button/Button";
import Link from "next/link";
import { H4, H6 } from "../Typography";
import styles from "./Header.module.scss";

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

  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <H4>
          <Link href="/">BKRental</Link>
        </H4>
        <div className={styles.headerModeGroup}>
          <Button
            onClick={(e) => handleChangeUserMode("tenant")}
            active={userMode == "tenant"}
          >
            <H6>Tenant</H6>
          </Button>
          <Button
            onClick={(e) => handleChangeUserMode("landlord")}
            active={userMode == "landlord"}
          >
            <H6>Landlord</H6>
          </Button>
        </div>
      </div>

      {user ? (
        <div className={styles.headerRight}>
          <Button href="/login">
            <H6>Login</H6>
          </Button>
          <Button href="/signup">
            <H6>Sign Up</H6>
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
    // <HeaderContainer container className="nav-bar container">
    //   <HeaderItem>
    //     <Box className="left-section">
    //       <TitleTypo variant="h1">
    //         <BaseLink href="/">BKrental</BaseLink>
    //       </TitleTypo>
    //       <TenantLandlordOption
    //         handleBtnOnClick={handleChangeUSerMode}
    //         isActive={isActive}
    //         btnType={btnType}
    //       />
    //     </Box>

    //     <Box className="right-section">
    //       {user ? (
    //         <UserProfileOption handleLogout={handleLogout} user={user} />
    //       ) : (
    //         <LoginOption />
    //       )}
    //     </Box>
    //   </HeaderItem>
    // </HeaderContainer>
  );
}

export default Header;
