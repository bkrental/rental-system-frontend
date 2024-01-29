"use client"
import { Button, Container, Page } from "@mui/material";
import { BaseContainer } from "@components/BaseComponents";
// import { StyledPage } from "@components/BaseComponents";
import Link from "next/link";
import styled from "@emotion/styled";

// const StyledPage = styled(Container)`
//     background: ${({ theme }) => theme.palette.background.page};
//     padding: 0;
//     margin: 0;
// `

const StyledPage = styled(BaseContainer)`
    background: ${({ theme }) => theme.palette.background.page};
    padding: 0;
    margin: 0;
`


function LandingPage() {
    // console.log((Link));
    return (
        <StyledPage>
            {/* <div>Header</div> */}
            <h1>Landing Page</h1>

            <Button variant="contained" color="primary">
                <Link href="/auth/login">Login</Link>
            </Button>
            <Button variant="contained" color="primary">
                <Link href="/auth/signup">Signup</Link>
            </Button>
        </StyledPage>
    )
}

export default LandingPage;