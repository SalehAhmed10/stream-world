import React from 'react'
import { useSearchLoading } from '@/context/SearchLoading'
import { Box } from '@chakra-ui/react'
import './searchloader.css'

export default function SearchLoader() {

    const { isSearchLoading } = useSearchLoading()

  return (
    <Box 
        position={'absolute'}
        top={'0'}
        left={'0'}
        width={'100vw'}
        height={'100vh'}
        display={isSearchLoading ? 'flex' : 'none'}
        justifyContent={'center'}
        alignItems={'center'}
        zIndex={'100'}
        bg={'rgba(0,0,0,0.5)'}
            
>
        {/* {isSearchLoading ? "Loading..." : ""} */}
        <div className="loader"></div>
        
    </Box>
  )
}
