"use client";
import { Button, Paper, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  BaseContainer,
  BaseGridContainer,
  Headline01,
  Description01,
  SubHeadline01,
} from "@components/BaseComponents";
import Image from "next/image";
import styled from "@emotion/styled";

const StyledPage = styled(BaseGridContainer)`
  height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});
  background: ${({ theme }) => theme.palette.background.page};
`;

const HeroWrapper = styled(BaseContainer)`
  grid-column: 1 / 7;

  grid-template-rows: repeat(auto, 1fr);
  margin: 32px 0;
`;

const HeroSection = styled(BaseContainer)`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 8px;

    .container {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 32px;
    }

    .hero-title {
        grid-column: 1 / 7;
        font-size: 50px;
        color: ${({ theme }) => theme.palette.text.primary};
    
        .highlight {
            color: ${({ theme }) => theme.palette.primary.main};
        }
    }


    .hero-subtitle {
        grid-column: 1 / 6; 
        color: ${({ theme }) => theme.palette.text.secondary};
    }
    

    .search-bar-wrapper {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-column-gap: 32px;
        padding-top: 16px;
        
        .search-bar {
            grid-column: 1 / 6;

            display: flex;
            flex-direction: row;
            align-items: center;
            height: 72px;
            padding: 0;
            margin: 0;

            border: 1px solid ${({ theme }) => theme.palette.text.secondary};
        
            .search-bar-input {
                font-size: 20px;
        }

        .search-bar-button {
            height: 100%;
            width: 72px;
            border-left: 1px solid ${({ theme }) => theme.palette.text.secondary};
            border-radius: 0 3px 3px 0;
        }
    }

`;

const BannerWrapper = styled(BaseContainer)`
  // background-color: green;
  grid-column: 7 / 13;
  margin: 32px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  .banner-img {
    width: 100% !important;
    height: 100% !important;
    // object-fit: cover;
    border-radius: 16px;
  }
`;

function LandingPage() {
  const bannerImageURL =
    "https://datnguyen2409-bkrental-dev.s3.ap-southeast-1.amazonaws.com/banner-tenant-landing.jpg";

  return (
    <StyledPage>
      <HeroWrapper>
        <HeroSection>
          <BaseContainer className="container">
            <Headline01 className="hero-title">
              Experience the ease of <span className="highlight">BKrental</span>{" "}
              for seamless home discovery.
            </Headline01>
          </BaseContainer>
          <BaseContainer className="container">
            <SubHeadline01 className="hero-subtitle">
              Discover houses and apartments for rent tailored to your needs and
              budget.
            </SubHeadline01>
          </BaseContainer>

          <BaseContainer className="search-bar-wrapper">
            <Paper component="form" className="search-bar">
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                className="search-bar-input"
                placeholder="Search for City, Address, budget"
                inputProps={{
                  "aria-label": "Search for City, Address, budget",
                }}
              />
              <Button
                color="primary"
                aria-label="directions"
                variant="contained"
                className="search-bar-button"
              >
                <SearchIcon />
              </Button>
            </Paper>
          </BaseContainer>
        </HeroSection>
      </HeroWrapper>

      <BannerWrapper>
        <Image
          src={bannerImageURL}
          className="banner-img"
          alt="banner-img"
          width={300}
          height={300}
        />
      </BannerWrapper>
    </StyledPage>
  );
}

export default LandingPage;
