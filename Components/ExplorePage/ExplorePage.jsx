"use client"

import { Box } from '@chakra-ui/react'
import React from 'react'
import SidebarWithHeader from '../Headers/SidebarWithHeader'
import FetchHorror from './calls/movies/FetchHorror'
import { FetchPopular } from './calls/movies/FetchPopular'
import FetchSciFi from './calls/movies/FetchSciFi'


function ExplorePage() {
    return (
        <>
            {/* popular movies  */}
            <SidebarWithHeader>
            <Box mx={{
                base: '0',
                md: '5',
                sm: '0',
            }}
            my={20}
                mb={6}
            >
                <FetchPopular />
            </Box>


            {/* horro movies */}

            <Box mx={{
                base: '0',
                md: '5',
                sm: '0',
            }}
                mb={6}
            >
                <FetchHorror />
            </Box>


            {/* TOP SciFi */}

            <Box mx={{
                base: '0',
                md: '5',
                sm: '0',
            }}
                mb={6}
            >
                <FetchSciFi />
            </Box>
            </SidebarWithHeader>
        </>
    )
}

export default ExplorePage