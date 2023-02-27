"use client"

import { Box } from '@chakra-ui/react'
import React from 'react'
import FetchHorror from './calls/movies/FetchHorror'
import { FetchPopular } from './calls/movies/FetchPopular'
import FetchSciFi from './calls/movies/FetchSciFi'


function Main() {
    return (
        <>
            {/* popular movies  */}
            <Box mx={{
                base: '0',
                md: '5',
                sm: '0',
            }}
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

        </>
    )
}

export default Main