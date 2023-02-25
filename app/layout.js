"use client"
import { Montserrat } from '@next/font/google'
import { ChakraProvider, Container, extendBaseTheme, extendTheme } from '@chakra-ui/react'
import SidebarWithHeader from '@/Components/SidebarWithHeader'
import './globals.css'
import CountProvider from '@/context/Count'
import ConstantsProvider from '@/context/constants'


const montserrat = Montserrat({
  weights: [400, 500, 600, 700],
  subsets: ['latin-ext'],

})

const theme = extendTheme({
  colors: {
    primary: '#201D29',
  },
  // breakpoints: {
  //   sm: '414px',
  //   md: '584px',
  //   lg: '1280px',
  // },
});


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${montserrat.className}`}>
        <ConstantsProvider>
          <CountProvider>
            <ChakraProvider theme={theme} >
              <SidebarWithHeader>

                {children}

              </SidebarWithHeader>
            </ChakraProvider>
          </CountProvider>
        </ConstantsProvider>
      </body>
    </html>
  )
}
