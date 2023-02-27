"use client"

import { Button, Flex, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import './AppSearch.css'
import { useColorMode } from '@chakra-ui/react'

function AppSearch() {



    const [input, setInput] = useState('')
    const [isError, setIsError] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { colorMode, toggleColorMode } = useColorMode()
    const handleInputChange = (e) => {
        setInput(e.target.value)
        setIsError(false)
    }

    // handle form submit on press enter key clear input and set isSubmitting to true

    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            if (input === '') {
                setIsError(true)
            } else {
                setIsSubmitting(true)
                setInput('')
                setTimeout(() => {
                    setIsSubmitting(false)
                }, 2000)
            }
        }
    }





    return (
        <FormControl isInvalid={isError} onSubmit={handleSubmit}>

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

            <Input
                type='text'
                value={input}
                placeholder={isSubmitting ? 'Submitting...' : 'Search'
                }
                onChange={handleInputChange}
                // onpress enter key to submit
                onKeyPress={handleSubmit}
                className={
                    colorMode === 'light' ? 'search-bar-dark' : 'search-bar-light'
                }
                backgroundPosition={{
                    base: 'right 1rem center',
                    md: 'right 1rem center',

                }}

            />


            {!isError && (
                <FormErrorMessage>Email is required.</FormErrorMessage>
            )}

        </FormControl>
    )
}

export default AppSearch

// {/* <Input type='sumbit' value={input} onChange={handleInputChange} placeholder={
//     isSubmitting ? 'Submitting...' : 'Search'
// } />
// {!isError && (
//     <FormErrorMessage>Email is required.</FormErrorMessage>
// )}
// {/* sumbit button */}
// <Button type='submit' colorScheme='blue' isLoading={isSubmitting}>
//     {/* search icon react icons*/}
//     <FiSearch />

// </Button> */}