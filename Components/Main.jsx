"use client"

import { Box, Button, Center, useColorMode, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { useCount } from '@/context/Count'
import { FetchPopular } from './FetchPopular'


export default function Main() {

    const { count, setCount } = useCount()
    const { colorMode, toggleColorMode } = useColorMode()


    return (
        <div>
            <Wrap>
                <Link href='home'>

                    <WrapItem>
                        <Center w='180px' h='80px' bg='red.200'>
                            Box 1
                        </Center>
                    </WrapItem>

                </Link>
                <WrapItem>
                    <Center w='180px' h='80px' bg='green.200'>
                        Box 2
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='180px' h='80px' bg='tomato'>
                        Box 3
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='180px' h='80px' bg='blue.200'>
                        Box 4
                    </Center>
                </WrapItem>
            </Wrap>

            <Box>
                <Button onClick={() => setCount(count + 1)}>+{count}</Button>
            </Box>

            <Box>




            </Box>

        </div>
    )
}
