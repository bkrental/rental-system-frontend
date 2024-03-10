import React from "react";
import Post from "@/components/Post/Post";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { useGetPostsQuery } from "@/redux/features/post/postApiSlice";

const StyledBox = styled(Box)`
  grid-area: 3 / 1 / 13 / 10;
  background: yellow;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 36px;
  grid-column-gap: 32px;
`;

function PostsSection() {
  const { data: postsData, error, isLoading, isSuccess } = useGetPostsQuery();

  let content;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = postsData.data.posts.map((post) => (
      <Post key={post.id} post={post} />
    ));
  }

  return <StyledBox>{content}</StyledBox>;
}

export default PostsSection;
