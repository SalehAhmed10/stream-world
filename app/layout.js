"use client"

import { ChakraProvider, extendTheme, } from '@chakra-ui/react'
import SidebarWithHeader from '@/Components/SidebarWithHeader'
import './globals.css'
import CountProvider from '@/context/Count'
import ConstantsProvider from '@/context/constants'
import { Suspense } from 'react'



import { globalStyles, fonts, colors, config } from './theme'
import Loading from './loading'



// const montserrat = Montserrat({
//   weights: [400, 500, 600, 700],
//   subsets: ['latin-ext'],

// }


const theme = extendTheme({
  styles: globalStyles
  , fonts, colors, config

})


export default function RootLayout({ children }) {

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
          <ConstantsProvider>
            <CountProvider>
              <SidebarWithHeader>
                <Suspense fallback={<Loading />}>

                  {children}
                </Suspense>
              </SidebarWithHeader>
            </CountProvider>
          </ConstantsProvider>
        </ChakraProvider>
      </body>
    </html>
  )
}
