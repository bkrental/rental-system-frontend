import { useDeletePostMutation } from "@/redux/features/landlord/api";
import { DeleteOutline, EditNoteOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import { IconButton, Stack, Tooltip, Snackbar } from "@mui/material";
import { useState } from "react";

export default function ActionButtons({ postId }) {
  const [deletePost, { isLoading: isDeleting, isSuccess, isError }] = useDeletePostMutation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId).unwrap();
      setSnackbarMessage("Post deleted successfully");
      const event = new CustomEvent("post-deleted", { detail: { postId, status: "success" } });
      window.dispatchEvent(event);
    } catch (error) {
      setSnackbarMessage("Error deleting post");
    }
    setOpenSnackbar(true);
  };

  return (
    <>
      <Stack height={100} direction="row" alignItems="center">
        <Tooltip title="Hide post">
          <IconButton aria-label="hide">
            <VisibilityOffOutlined fontSize="inherit" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Edit post">
          <IconButton color="info" aria-label="edit post">
            <EditNoteOutlined fontSize="inherit" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Delete post">
          <IconButton color="error" aria-label="delete post" onClick={() => handleDelete(postId)} disabled={isDeleting}>
            <DeleteOutline fontSize="inherit" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={snackbarMessage}
      />
    </>
  );
}
