"use client";
import { useGetPreviewMessagesQuery } from "@/redux/features/landlord/api";
import { setChatTargetingUser } from "@/redux/features/system/systemSlice";
import { Avatar, Badge, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import AvatarWithStatus from "./AvatarWithStatus";

export default function ChatPreview({ previews, setPreviews }) {
  const targetingUser = useSelector((s) => s.system.chatTargetingUser);
  const onlineUsers = useSelector((s) => s.system.chatOnlineUsers);
  const dispatch = useDispatch();

  return (
    <List>
      {(previews ?? []).map((preview) => (
        <ListItem
          key={preview.id}
          sx={{
            borderRadius: 1,
            backgroundColor: targetingUser?.id == preview.user ? "rgba(239, 108, 0, 0.12)" : "#fff",
            borderLeft: onlineUsers.includes(targetingUser?._id) ? "4px solid" : "none",
          }}
          onClick={() =>
            dispatch(
              setChatTargetingUser({
                id: preview.user,
                name: preview.name,
                avatar: preview.avatar,
              })
            )
          }
        >
          <AvatarWithStatus online={onlineUsers} userId={preview?._id} src={preview.avatar} />
          <ListItemText
            primary={preview.name}
            secondary={(preview.messageType == "sent" ? "You: " : "") + preview.message}
          />
        </ListItem>
      ))}
    </List>
  );
}
