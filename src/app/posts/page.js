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

const StyledPage = styled(BaseContainer)`
  background: ${({ theme }) => theme.palette.background.page};
  padding: 12px 64px; 
  

  @media (max-width: 910px) {
    .left-section {
      grid-column: 1 / 3;
    }

    .right-section {
      display: none;
    }
  }

  display: grid;
  grid-template-columns: 1fr 270px;
  grid-column-gap: 32px;
  position: relative;
  grid-row-gap: 1fr 270px;

  .left-section {
    height: 1000px
  }

  .right-section {
    align-self: start;
    position: fixed;
    top: calc(12px + ${({ theme }) => theme.componentSize.header.height});
    right: 64px;
    
  }
`;


function PostsPage() {

  return (
    <StyledPage className="posts-container">
      <Box className="left-section">
        <SearchSection />
        <PostsSection />
      </Box>
      <Box className="right-section">
        <FilterSection />
      </Box>
    </StyledPage>
  )
}

export default PostsPage;