"use client"


import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import { Box, Button, Flex, Input, useColorModeValue } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { useColorMode } from '@chakra-ui/react'
// import { useSearchQuery } from '@/context/SearchQuery'
import './appsearch.css'




function AppSearch() {



    // const [search, setSearch] = useState("")

    const router = useRouter();
    const [query, setQuery] = useState('');

    const { colorMode, toggleColorMode } = useColorMode()
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);



    // disable submit button when search is empty or is submitting a search query to the server
    const isDisabled = query === '' || isSubmitting;


    // onChange={e => setSearchQuery(e.target.value.toLowerCase())}
    const handleChange = (e) => {
        setQuery(e.target.value.toLowerCase());
    }

    // handle form submit on press enter key clear input and set isSubmitting to true
    const handleSubmit = (e) => {
        // e.preventDefault();

        if (query === '') {
            e.preventDefault();
            setIsSubmitting(true)
            setQuery('')
            setTimeout(() => {
                setIsSubmitting(false)
                setIsError(true)
            }, 1000)
        } else {
            e.preventDefault();
            setIsSubmitting(true)
            setQuery('')
            setTimeout(() => {
                setIsSubmitting(false)
                setIsError(false)
                router.push(`/search?query=${query}`)
            }, 200)

            // router.push(`/search?query=${query}`)
        }
    }


    return (

        <>
            <Box w={{
                base: '100%',
                // md: '100%',
                // lg: '100%',
                // xl: '100%',
            }}>
                <form onSubmit={handleSubmit} >

                    <Flex >
                        <Input
                            value={query}
                            onChange={handleChange}
                            type='text'
                            placeholder={
                                // if isSubmitting is true then show submitting else show search and if isError is true then show error
                                isSubmitting ? 'Searching..' : isError ? 'Search Failed | Try Again' : 'Browse Movies, TV Shows and more...'
                            }
                            className='search-bar'
                            outlineOffset={'none'}
                            color={useColorModeValue('gray.700', 'gray.100')}
                            _placeholder={{
                                color: useColorModeValue('gray.900', 'gray.300'),
                                fontSize: {
                                    base: '12px',
                                    md: '1rem',

                                }
                            }}
                            border='0px'
                            // backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.700'}
                            backgroundColor={useColorModeValue('gray.300', 'gray.700')}
                            background="url('https://img.icons8.com/ios/50/000000/search--v1.png') no-repeat right 1rem center"
                            
                            backgroundRepeat="no-repeat"
                            backgroundPosition="right 1rem center"
                            backgroundSize="1.5rem 1.5rem"
                            // onlick background image to submit
  
                        // onpress enter key to submit
                        // className={
                        //     colorMode === 'light' ? 'search-bar-dark' : 'search-bar-light'
                        // }
                        />
                        <Button
                            type='submit'
                            display='none'
                        >

                        </Button>
                    </Flex>

                </form>


            </Box>

            {/* <form onSubmit={handleSubmit}  >
                <FormControl isInvalid={isError} onSubmit={handleSubmit}>
                    <Flex align='center' justify='center'>

                        <Input
                            type='text'
                            placeholder={
                                // if isSubmitting is true then show submitting else show search and if isError is true then show error
                                isSubmitting ? 'Submitting...' : isError ? 'Search Faild' : 'Search'

                            }
                            value={query}
                            onChange={handleChange}
                            // onpress enter key to submit
                            className={
                                colorMode === 'light' ? 'search-bar-dark' : 'search-bar-light'
                            }
                        />
                        <Button
                            type='submit'
                            // className='hidden'
                            display='none'


                        >
                            <FiSearch />
                        </Button>
                    </Flex>


                </FormControl>

            </form> */}


            {/* search input FiSearch icon in background  */}
            {/* <Input type='text' value={input} onChange={handleInputChange} placeholder={isSubmitting ? 'Submitting...' : 'Search'
            }
                // fiSearch icon as background
                // icon in background
                background="url('https://img.icons8.com/ios/50/000000/search--v1.png') no-repeat right 1rem center"
                backgroundRepeat="no-repeat"
                backgroundPosition="right 1rem center"
                backgroundSize="1.5rem 1.5rem"
                // onlick background image to submit
                onClick={handleSubmit}
            /> */}






        </>

    );
}

export default AppSearch






{/* <form onSubmit={handleSubmit}>

<FormControl
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
            value={query}


            onChange={handleChange}

            // onpress enter key to submit
            className={
                colorMode === 'light' ? 'search-bar-dark' : 'search-bar-light'
            }

        />

        {/* <Link
        href="/search/[query]" as={`/search?query=${searchQuery}`}
    > */}
{/* <Button type='submit' isLoading={isSubmitting}
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
{/* </Link> */ }

//     </Flex >



// </FormControl >


// </form > * /} */}








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