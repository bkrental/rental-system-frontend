import React from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from "@mui/material";

const SuccessDialog = ({ open, onClose, onViewPost }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="success-dialog-title"
      aria-describedby="success-dialog-description"
    >
      <DialogTitle id="success-dialog-title">{"Post Created Successfully"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="success-dialog-description">Your post has been created successfully.</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
        <Button onClick={onViewPost} color="secondary" autoFocus>
          View Post
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SuccessDialog;
