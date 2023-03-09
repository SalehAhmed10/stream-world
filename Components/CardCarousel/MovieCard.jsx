"use client"

import React from 'react'
import { Box, Text, Image, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import './moviecard.css'

import { useConstants } from '@/context/constants'
import { easeIn, motion, wrap } from 'framer-motion'
// import css



export default function MovieCard(
    {
        id,
        title,
        key,
        poster,
        rating,
        release_date,
        media_type,
        first_air_date,

    }
) {

    const { apiImagePath, noImage } = useConstants()
    const { apiCardImagePath } = useConstants()



    // framer motion animation for card
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    // framer motion animation hover for card
    const hover = {
        // ease the transition

        // // random rotate
        // rotate: Math.floor(Math.random() * 10) - 5,
        scale: 1.1,
        opacity: 0.8,
        // cursor swipe horizontal
        cursor: 'grab',

        transition: {
            duration: 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 10,
            mass: 0.5,
            ease: easeIn,
        },

    }


    // check media type and return the correct media type
    const checkMediaType = (media_type) => {
        if (media_type === 'movie') {
            return 'movie'
        } else if (media_type === 'tv') {
            return 'tv'
        } else {
            return 'movie'
        }
    }

    // release date or first air date for tv shows
    const releaseDate = (release_date, first_air_date) => {
        if (release_date) {
            return release_date
        } else if (first_air_date) {
            return first_air_date
        } else {
            return 'N/A'
        }
    }

    // rating limit 2 digits
    const ratingLimit = (rating) => {
        if (rating) {
            return rating.toFixed(1)
        } else {
            return 'N/A'
        }
    }


    // check if poster is null
    const checkPoster = (poster) => {
        if (poster) {
            return `${apiImagePath}${poster}`
        } else {
            return noImage
        }
    }



    return (
        <>

            {/* create a movie card with and rating span over it  */}
            <Box height={{
                base: '300px',

                md: '300px',
                sm: '300px',
                lg: '300px',
            }}
                width={{
                    base: '155px',
                    md: '150px',
                    sm: '150px',
                    lg: '180px',

                }}
                position={'relative'}
                display={'flex'}
                columnGap={2}
                rowGap={1}
                flexDirection={'column'}
                key={key}
            >
                <motion.div
                    whileHover={hover}
                    variants={variants}
                    className="card-img"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}



                >




                    <Image src={
                        checkPoster(poster)
                    }
                        alt=""
                        height={{
                            base: '250px',
                            md: '250px',
                            sm: '250px',
                            lg: '250px',
                        }}
                        width={{
                            base: '155px',
                            md: '150px',
                            sm: '150px',
                            lg: '180px',
                        }}
                        objectFit={'cover'}
                        loading={'lazy'}
                        borderRadius={'2xl'}
                    />
                </motion.div>

                <div className='rating-wrapper'>
                    <Text
                        fontSize={{
                            base: 'xs',
                            md: 'sm',
                            sm: 'xs',
                            lg: 'sm',
                        }}
                        className='card-overlay-rating'

                    >
                        {ratingLimit(rating)}
                    </Text>
                </div>

                <Box >
                    <Link
                        href={`${id}`}
                    >
                        <Text
                            fontSize={{
                                base: 'xs',
                                md: 'sm',
                                sm: 'xs',
                                lg: 'sm',
                            }}
                            noOfLines={1}
                            // on hover show the full title
                            title={title}

                        >
                            {title}
                        </Text>
                    </Link>

                    <Flex
                        flexDirection={'row'}
                        justifyContent={'space-between'}

                    >
                        <Text
                            fontSize={{
                                base: 'xs',
                                md: 'xs',
                                sm: 'xs',
                                lg: 'xs',
                            }}
                            color={'gray.500'}
                        // limit the text to 3 lines and add ... if more

                        >
                            {releaseDate(release_date, first_air_date)}
                        </Text>

                        <Text
                            fontSize={{
                                base: 'xs',
                                md: 'xs',
                                sm: 'xs',
                                lg: 'xs',
                            }}
                            color={'gray.500'}

                        >
                            {checkMediaType(media_type)}

                        </Text>

                    </Flex>

                </Box>


            </Box>

        </>
    )
}

