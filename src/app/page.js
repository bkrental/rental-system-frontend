"use client"
import { Button, Container } from "@mui/material";
import Link from "next/link";

function LandingPage() {
    // console.log((Link));
    return (
        <Container>
            {/* <div>Header</div> */}
            <h1>Landing Page</h1>

            <Button variant="contained" color="primary">
                <Link href="/auth/login">Login</Link>
            </Button>
            <Button variant="contained" color="primary">
                <Link href="/auth/signup">Signup</Link>
            </Button>
        </Container>
    )
}

export default LandingPage;