"use client";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useGetPostsQuery } from '@/redux/features/post/postApiSlice';

import {
  BaseContainer,
  BaseGridContainer,
} from '@components/BaseComponents';
import {
  Box,
} from '@mui/material';
import FilterSection from './FilterSection.jsx';
import PostsSection from './PostsSection.jsx';
import SearchSection from './SearchSection.jsx';
import styled from '@emotion/styled';

const StyledPage = styled(BaseGridContainer)`
  background: ${({ theme }) => theme.palette.background.page};

  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;
  padding: 12px 64px; 
`;


function PostsPage() {

  return (
    <StyledPage className="posts-container">
      <SearchSection />
      <PostsSection />
      <FilterSection />
    </StyledPage>
  )
}

export default PostsPage;