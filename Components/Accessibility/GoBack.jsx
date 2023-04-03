import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useRouter, usePathname } from 'next/navigation'

export default function GoBack() {

    const router = useRouter()

    const isHome = usePathname() === '/'

    const { colorMode, toggleColorMode } = useColorMode()
    // onclick go back
    const goBack = () => {
        // window.history.back()
        router.back()
    }



    return (
        <div>
            <IconButton
                size="md"
                variant="ghost"
                aria-label="open menu"
                // backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                backgroundColor={useColorModeValue('gray.300', 'gray.700')}
                icon={<FiArrowLeft />}
                onClick={goBack}
                // display={{
                //     base: 'flex',
                //     md: 'flex'

                // }}
                display={isHome ? 'none' : 'flex'}
            />
        </div>
    )
}
