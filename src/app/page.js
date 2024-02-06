"use client"
import {
    Button,
    Container,
    Page,
    TextField,
    Box,
    Paper,
    IconButton,
    InputBase,
    Divider,
} from "@mui/material";
import {
    BaseContainer,
    BaseGridContainer,
    Headline01,
    Description01,
    SubHeadline01,
} from "@components/BaseComponents";
// import {
//     MenuIcon,
//     SearchIcon,
//     DirectionsIcon,
// } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import styled from "@emotion/styled";


const StyledPage = styled(BaseGridContainer)`
    height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});  
    background: ${({ theme }) => theme.palette.background.page};
    // background-color: pink;
`

const HeroWrapper = styled(BaseContainer)`
    background-color: blue;
    height: 100%;
    grid-column: 1 / 7;
`

const HeroSection = styled(BaseContainer)`
    background-color: yellow;
    height: 
    100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    row-gap: 16px;


    .hero-title {
        font-size: 50px;
        color: ${({ theme }) => theme.palette.text.primary};
    }

    .hero-subtitle {
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    .search-bar-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;

        
        .search-bar {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 72px;
            padding: 0;
            margin: 0;

            border: 1px solid ${({ theme }) => theme.palette.text.secondary};
        }
    }

    .highlight {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`

const BannerWrapper = styled(BaseContainer)`
    background-color: green;
    height: 100%;
    grid-column: 7 / 13;

    display: flex;
    align-items: center;
    justify-content: center;
`



function LandingPage() {
    // console.log((Link));
    return (
        <StyledPage>
            <HeroWrapper >
                <HeroSection>
                    <Headline01 className="hero-title">Experience the ease of <span className="highlight">BKrental</span> for seamless home discovery.</Headline01>
                    <SubHeadline01 className="hero-subtitle">
                        Discover houses and apartments for rent tailored to your needs and budget.
                    </SubHeadline01>

                    <BaseContainer
                        className="search-bar-wrapper"
                    >

                        <Paper
                            component="form"
                            className="search-bar"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search for City, Address, budget"
                                inputProps={{ 'aria-label': 'Search for City, Address, budget' }}
                            />
                            <Button
                                color="primary"
                                aria-label="directions"
                                variant="contained"
                            >
                                <SearchIcon />
                            </Button>
                        </Paper>
                    </BaseContainer>
                </HeroSection>
            </HeroWrapper>

            <BannerWrapper>
                <h1>Experience the ease of BKrental for seamless home discovery.</h1>
            </BannerWrapper>
            {/* </IntroductionWrapper> */}
        </StyledPage>
    )
}

export default LandingPage;
