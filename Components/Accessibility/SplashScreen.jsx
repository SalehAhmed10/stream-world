"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@chakra-ui/react'
import './splashscreen.css'



export default function SplashScreen({ finishLoading }) {

    const [isMounted, setIsMounted] = useState(false)

    // show splash screen with animation Loading Text  and then hide it after 5 seconds
    setTimeout(() => {
        setIsMounted(true)
        setTimeout(() => {
            finishLoading()
        }, 2000)
    }, 0)

    return (
        <Container
            maxW="container.xl"
            height='100vh'
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            zIndex='100'
            opacity={isMounted ? 1 : 0}
            transition='opacity 1s ease-in-out'
        >
            {/*
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}

            >
                Loading...
            </motion.h1> */}
            <motion.div className="loader">

            </motion.div>
        </Container>
    )





}
