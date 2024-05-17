"use client";

import Chatbot from "@/components/Chatbot";
import { toggleChat } from "@/redux/features/system/systemSlice";
import { ChatBubbleOutline } from "@mui/icons-material";
import { Box, Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function TenantLayout({ children }) {
  const dispatch = useDispatch();
  const isChatOpened = useSelector((s) => s.system.isChatOpened);

  const handleToggleChat = () => {
    dispatch(toggleChat());
  };

  return (
    <Box>
      {children}
      <Fab onClick={handleToggleChat} color="primary" sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <ChatBubbleOutline />
      </Fab>
      {isChatOpened && <Chatbot />}
    </Box>
  );
}
