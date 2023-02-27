import { Flex } from '@chakra-ui/react'
import React from 'react'
import {
    Icon,
    Text,
} from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa'
import { CgSun } from 'react-icons/cg'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';

export default function ThemeToggle() {

    const { colorMode, toggleColorMode } = useColorMode()
    return (
        // <Flex
        //     align="center"
        //     p="4"
        //     mx="4"
        //     borderRadius="lg"
        //     role="group"
        //     cursor="pointer"
        //     _hover={{
        //         bg: 'cyan.400',
        //         color: 'white',
        //     }}
        //     onClick={toggleColorMode}>
        //     {colorMode === 'light' ? (
        //         <Icon
        //             mr="4"
        //             fontSize="16"
        //             _groupHover={{
        //                 color: 'white',
        //             }}
        //             as={FaMoon}
        //         />
        //     ) : (
        //         <Icon
        //             mr="4"
        //             fontSize="16"
        //             _groupHover={{
        //                 color: 'white',
        //             }}
        //             as={CgSun}
        //         />
        //     )}
        //     <Text>
        //         {
        //             colorMode == 'light' ? 'Dark Mode' : 'Light Mode'
        //         }
        //     </Text>
        // </Flex>

        <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <FaMoon /> : <CgSun />}
            onClick={toggleColorMode}
        />

    )
}
