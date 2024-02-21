"use client";
import { BaseContainer } from "@components/BaseComponents";
import { Box, Avatar } from "@mui/material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";

function UserProfileOption({ handleLogout, user }) {
  const avatarName = user ? user[0].toUpperCase() : "";
  return (
    <BaseContainer>
      <Box className="user-info-option">
        <Button className="user-info_avatar" onClick={handleLogout}>
          <ViewHeadlineIcon />
          <Avatar src={user.avatar}>{avatarName}</Avatar>
        </Button>
      </Box>
    </BaseContainer>
  );
}

export default UserProfileOption;
