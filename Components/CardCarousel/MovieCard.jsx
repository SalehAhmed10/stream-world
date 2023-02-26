import { Box, Text, Image } from '@chakra-ui/react'

import React from 'react'
import { useConstants } from '@/context/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function MovieCard(
    {
        id,
        title,
        key,
        overview,
        poster,
    }
) {

    const { apiImagePath } = useConstants()

    // framer motion animation for card
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    // framer motion animation hover for card
    const hover = {
        scale: 1.1,
        transition: { duration: 0.3 },

        opacity: 0.8,
        cursor: 'pointer',
    }





    return (
        <Link
            href={`${id}`}
        >
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                key={key}
                whileHover={hover}
            >

                <Box height={{
                    base: '300px',
                    md: '300px',
                    sm: '250px',
                    lg: '350px',


                }}
                    width={{
                        base: '150px',
                        md: '150px',
                        sm: '150px',
                        lg: '200px',

                    }}
                >
                    {/* <Image src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} width={150} height={70} /> */}
                    {/* <Image src={`${apiImagePath}${poster}`} alt={title} width={150} height={70} /> */}
                    <Image src={`${apiImagePath}${poster}`} alt={title}
                        height={{
                            base: '250px',
                            md: '250px',
                            sm: '200px',
                            lg: '300px',

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
                    <Text fontSize={'smaller'} mt={2} >
                        {title}
                    </Text>
                </Box>
            </motion.div>
        </Link>
    )
}

