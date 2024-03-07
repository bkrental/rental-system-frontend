"use client";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import styles from "./Header.module.scss";

function UserProfileOption({ handleLogout, user = null }) {
  const avatarName = user ? user[0]?.toUpperCase() : "";

  return (
    <div onClick={handleLogout} className={styles.profileContainer}>
      <ViewHeadlineIcon sx={{ fontSize: 30 }} />
      <div className={styles.profileAvatar}>{avatarName}</div>
    </div>
  );
}

export default UserProfileOption;
