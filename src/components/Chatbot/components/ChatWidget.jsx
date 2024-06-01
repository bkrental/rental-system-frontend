// components/Chatbot.js
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, TextField, IconButton, List, ListItem, ListItemText, Paper, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { grey } from "@mui/material/colors";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import getRandomSenderId from "@/utils/getRandomSenderId";

const ChatbotContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: 20,
  bottom: 80,
  width: "100%",
  maxWidth: 500,
  mx: "auto",
  mt: 5,
}));

const ChatWidget = () => {
  // Create sender id from user
  const user = useSelector((s) => s.auth.user);
  const senderId = useMemo(() => (user && user?.id ? user.id : getRandomSenderId(), []));
  const lastMessageEl = useRef(null);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add the user's message to the chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);

    // Call to RASA API to get the bot response
    fetch("http://localhost:8888/webhooks/rest/webhook", {
      method: "POST",
      body: JSON.stringify({ sender: senderId, message: input }),
    })
      .then((response) => response.json())
      .then((data) => {
        const botReponses = data.map((message) => ({ text: message.text, sender: "bot" }));
        setMessages([...newMessages, ...botReponses]);
        console.log(data);
      });

    setInput("");
  };

  useEffect(() => {
    // Scroll to bottom when new message is added
    if (lastMessageEl.current) {
      lastMessageEl.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <ChatbotContainer>
      <Paper sx={{ p: 2, height: "70vh", display: "flex", flexDirection: "column" }}>
        <List sx={{ flexGrow: 1, overflowY: "auto" }}>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.sender === "user" ? "flex-end" : "flex-start" }}>
              <ListItemText
                primary={message.text}
                sx={{
                  color: message.sender === "user" ? "#fff" : "inherit",
                  bgcolor: message.sender === "user" ? "primary.main" : grey[200],
                  borderRadius: 2,
                  p: 1,
                  maxWidth: "75%",
                }}
              />
            </ListItem>
          ))}
          <div ref={lastMessageEl} />
        </List>
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <TextField
            variant="outlined"
            fullWidth
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <IconButton color="primary" onClick={handleSend}>
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    </ChatbotContainer>
  );
};

export default ChatWidget;
