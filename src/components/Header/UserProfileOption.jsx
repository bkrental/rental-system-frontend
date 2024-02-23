"use client";
import { BaseContainer } from "@components/BaseComponents";
import { Box, Avatar, Button } from "@mui/material";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import styled from "@emotion/styled";

const StyledBox = styled(Box)`
  .user-info_btn {
    border: 2px solid ${({ theme }) => theme.palette.complementary.black};
    border-radius: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    // gap: 6px;
    padding: 8px 16px;
    height: 50px;

    .user-info_menu {
      font-size: 30px;
    }

    .user-info_avatar {
      height: 34px;
      width: 34px;
    }
  }
`;

function UserProfileOption({ handleLogout, user = null }) {
  const avatarName = user ? user[0]?.toUpperCase() : "";
  return (
    <BaseContainer>
      <StyledBox className="user-info-option">
        <Button
          className="user-info_btn"
          onClick={handleLogout}
          variant="outlined"
          startIcon={<ViewHeadlineIcon className="user-info_menu" />}
        >
          <Avatar className="user-info_avatar" src={user.avatar}>
            {avatarName}
          </Avatar>
        </Button>
      </StyledBox>
    </BaseContainer>
  );
}

export default UserProfileOption;
