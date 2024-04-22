import {
  setDescription,
  setIsStepCompleted,
} from "@/redux/features/createPostSlice";
import { Stack, TextField } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function PostDescriptionForm() {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.createPost.description);

  useEffect(() => {
    dispatch(setIsStepCompleted(description !== ""));
  }, [description]);

  return (
    <Stack spacing={2}>
      <TextField
        id="description"
        hiddenLabel
        multiline
        fullWidth
        rows={8}
        value={description}
        onChange={(e) => dispatch(setDescription(e.target.value))}
      />
      {/* <Alert icon={<InfoOutlined />} severity="primary">
        The description should be detailed and informative. It should include
        the number of rooms, bathrooms, and other important features
      </Alert> */}
    </Stack>
  );
}
