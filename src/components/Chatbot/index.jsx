// components/Chatbot.js
import React, { useState } from "react";
import { Box, TextField, IconButton, List, ListItem, ListItemText, Paper, styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { grey } from "@mui/material/colors";

const ChatbotContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  right: 20,
  bottom: 80,
  width: "100%",
  maxWidth: 500,
  mx: "auto",
  mt: 5,
}));

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // Add the user's message to the chat
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    // Simulate a response from the bot
    setTimeout(() => {
      const botResponse = { text: "This is a bot response.", sender: "bot" };
      setMessages([...newMessages, botResponse]);
    }, 1000);
  };

  return (
    <ChatbotContainer>
      <Paper sx={{ p: 2, height: "70vh", display: "flex", flexDirection: "column" }}>
        <List sx={{ flexGrow: 1, overflowY: "auto" }}>
          {messages.map((message, index) => (
            <ListItem key={index} sx={{ justifyContent: message.sender === "user" ? "flex-end" : "flex-start" }}>
              <ListItemText
                primary={message.text}
                sx={{
                  bgcolor: message.sender === "user" ? "primary.light" : grey[200],
                  borderRadius: 2,
                  p: 1,
                  maxWidth: "75%",
                }}
              />
            </ListItem>
          ))}
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

export default Chatbot;
