import { setIsStepCompleted, setTitle } from "@/redux/features/createPostSlice";
import { InfoOutlined } from "@mui/icons-material";
import { Alert, TextField, Stack } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PostTitleForm() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.createPost.title);

  useEffect(() => {
    dispatch(setIsStepCompleted(title !== ""));
  }, [title]);

  return (
    <Stack spacing={2}>
      <TextField
        id="title"
        hiddenLabel
        multiline
        fullWidth
        rows={4}
        value={title}
        onChange={(e) => dispatch(setTitle(e.target.value))}
      />
    </Stack>
  );
}
