import { Flex } from '@chakra-ui/react'
import React from 'react'
import {
    Icon,
    Text,
} from '@chakra-ui/react';
import { FaMoon } from 'react-icons/fa'
import { CgSun } from 'react-icons/cg'
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';

export default function ThemeToggle({ bg}) {

    const { colorMode, toggleColorMode } = useColorMode()
    return (


        <IconButton
            aria-label="Toggle theme"
            icon={colorMode === 'light' ? <FaMoon /> : <CgSun />}
            onClick={toggleColorMode}
            // bg={useColorModeValue('gray.100', 'gray.700')}
            // bg={bg ? useColorModeValue('gray.100', 'gray.700') : 'none'}
            backgroundColor={useColorModeValue('gray.300', 'gray.700')}
            _hover={{
                bg: useColorModeValue('gray.200', 'gray.600'),

            }}
        />  

    )
}
