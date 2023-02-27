import { Box, Text, Image, Flex } from '@chakra-ui/react'

import React from 'react'
import { useConstants } from '@/context/constants'
import { easeIn, motion, wrap } from 'framer-motion'
import Link from 'next/link'
// import css
import './moviecard.css'



export default function MovieCard(
    {
        id,
        title,
        key,
        overview,
        poster,
        rating,
        release_date
    }
) {

    const { apiImagePath } = useConstants()
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
            >
                <motion.div
                    whileHover={hover}
                    variants={variants}
                    className="card-img"
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.5 }}
                    key={key}


                >




                    <Image src={
                        `${apiImagePath}${poster}`
                    } alt=""
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
                        {rating}
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

                    <Flex>
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
                            {release_date}
                        </Text>

                    </Flex>

                </Box>


            </Box>

            {/* <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                key={key}
                whileHover={hover}
            >

                <Box height={{
                    base: '360px',
                    md: '360px',
                    sm: '360px',
                    lg: '360px',
                }}
                    width={{
                        base: '150px',
                        md: '150px',
                        sm: '150px',
                        lg: '200px',

                    }}
                >
                    <Image src={`${apiImagePath}${poster}`} alt={title}
                        height={{
                            base: '250px',
                            md: '250px',
                            sm: '200px',
                            lg: '270px',

                        }}
                        width={{
                            base: '150px',
                            md: '200px',
                            sm: '150px',
                            lg: '200px',
                        }}
                        borderRadius={'lg'}
                        objectFit={'cover'}



                    />
                    <div class="overlay-text" ><div class="overlay-text-rating">7.5<svg fill="#f2b01e" width="10" height="10" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path></svg></div></div>
                    <Text fontSize={'smaller'} mt={2} >
                        {title}
                    </Text>
                </Box>
            </motion.div> */}
        </>
    )
}

{/* <Image src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} width={150} height={70} /> */ }
{/* <Image src={`${apiImagePath}${poster}`} alt={title} width={150} height={70} /> */ }
