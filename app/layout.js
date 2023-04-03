"use client";

import { ChakraProvider, extendTheme, } from '@chakra-ui/react'

import './globals.css'

import ConstantsProvider from '@/context/constants'
import { Suspense, useEffect, useState } from 'react'
import { globalStyles, fonts, colors, config } from './theme'

import SplashScreen from '@/Components/Accessibility/SplashScreen'
import { usePathname } from 'next/navigation'
import SideBarToggleProvider from '@/context/SideBarToggle';
import SearchLoadingProvider from '@/context/SearchLoading';
import SearchLoader from '@/Components/Accessibility/SearchLoader';


// const montserrat = Montserrat({
//   weights: [400, 500, 600, 700],
//   subsets: ['latin-ext'],

// }


const theme = extendTheme({
  styles: globalStyles
  , fonts, colors, config

})


export default function RootLayout({ children }) {

  const pathname = usePathname()

  const isHome = pathname === '/'

  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return
  }, [isLoading])

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body >
        <ChakraProvider
          theme={theme}
        // resetCSS={true}
        >
          <SearchLoadingProvider>
          <SideBarToggleProvider> 

          <ConstantsProvider>
         
              {/* {isLoading && isHome ? (
                <SplashScreen finishLoading={(() => setIsLoading(false))} />
              ) :
                <> */}
                
                    {/* <Suspense fallback={<Loading />}> */}
                  <SearchLoader/>
                      {children}
                    {/* </Suspense> */}
                  
                {/* </>} */}
      
          </ConstantsProvider>
          </SideBarToggleProvider>
          </SearchLoadingProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
