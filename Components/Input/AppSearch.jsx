"use client"

import React, { useEffect, useState } from 'react'
import Router from 'next/navigation'
import Link from 'next/link'
import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

import { FiSearch } from 'react-icons/fi'
import './AppSearch.css'
import { useColorMode } from '@chakra-ui/react'



function AppSearch() {



    const [search, setSearch] = useState("")

    const [input, setInput] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [empty, setEmpty] = useState(false)

    const { colorMode, toggleColorMode } = useColorMode()


    // handle form sumbmit do not refresh page if input is empty or has error
    const handleSubmit = (e) => {
        e.preventDefault()
        if (input === '') {
            setEmpty(true)
        } else if (isError) {
            return
        } else {
            setIsSubmitting(true)
            setTimeout(() => {
                setIsSubmitting(false)
                console.log('searching for: ' + search)
            }, 3000)
        }
    }


    return (
        <FormControl isInvalid={isError} onSubmit={handleSubmit}
            width={{
                base: '100%',
                sm: '100%',
                md: "50%"
            }}
        >

            <Flex align='center' justify='center'>

                <Input
                    type='text'
                    placeholder={isSubmitting ? 'Searching...' : 'Search'
                    }
                    value={search}
                    // always set value to state to lower case
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                    // onpress enter key to submit
                    className={
                        colorMode === 'light' ? 'search-bar-dark' : 'search-bar-light'
                    }

                />

                <Link
                    href="/search/[query]" as={`/search?query=${search}`}
                >
                    <Button type='submit' isLoading={isSubmitting}
                        // loading state

                        // color scheme
                        variant='outline'
                        // variant

                        // size
                        className='search-button'
                    // class name


                    >
                        <FiSearch />
                    </Button>
                </Link>

            </Flex>



        </FormControl>



        // <form
        //     className="search-bar"
        //     onSubmit={e => {
        //         e.preventDefault();
        //         console.log("searching for: " + search)

        //     }}
        // >

        //     <input
        //         type="text"
        //         placeholder="Search"
        // value={search}
        // onChange={e => setSearch(e.target.value)}
        //     />

        //     <Link
        //         href="/search/[query]" as={`/search?query=${search}`}

        //     >
        //         <button type="submit">Search</button>
        //     </Link>



        // </form>
    );
}

export default AppSearch















// import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
// import React, { useState } from 'react'
// import { FiSearch } from 'react-icons/fi'
// import './AppSearch.css'
// import { useColorMode } from '@chakra-ui/react'

// function AppSearch() {







//     // handle form submit on press enter key clear input and set isSubmitting to true

//     const handleSubmit = (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault()
//             if (input === '') {
//                 setIsError(true)
//             } else {
//                 setIsSubmitting(true)
//                 setInput('')
//                 setTimeout(() => {
//                     setIsSubmitting(false)
//                 }, 2000)
//             }
//         }
//     }





//     return (

//     )
// }

// export default AppSearch

// // {/* <Input type='sumbit' value={input} onChange={handleInputChange} placeholder={
// //     isSubmitting ? 'Submitting...' : 'Search'
// // } />
// // {!isError && (
// //     <FormErrorMessage>Email is required.</FormErrorMessage>
// // )}
// // {/* sumbit button */}
// // <Button type='submit' colorScheme='blue' isLoading={isSubmitting}>
// //     {/* search icon react icons*/}
// //     <FiSearch />

// // </Button> */}