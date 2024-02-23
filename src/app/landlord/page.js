"use client"
import React from 'react'
import { BaseGridContainer } from '@/components/BaseComponents'
import isAuth from '@/components/isAuth'
import styled from '@emotion/styled'

const StyledPage = styled(BaseGridContainer)`
    height: calc(100vh - ${({ theme }) => theme.componentSize.header.height});
    // background: ${({ theme }) => theme.palette.background.page};
    background: blue;

`

function LandlordPage() {
    return (
        <StyledPage>
            <h1>Landlord Page</h1>
        </StyledPage>
    )
}

export default isAuth(LandlordPage)
