"use client";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function UserProfileOption({ onClick, user = null }) {
  const avatarName = user ? user[0]?.toUpperCase() : "";

  return (
    <div onClick={onClick} className="profile_container">
      <ViewHeadlineIcon sx={{ fontSize: 30 }} />
      <div className="profile_avatar">{avatarName}</div>
      <div>Dat Nguyen</div>
    </div>
  );
}

export default UserProfileOption;
