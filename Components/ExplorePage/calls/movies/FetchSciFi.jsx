"use client"

import { Box, Container, Slide, Text } from '@chakra-ui/react'
import Carousel from '@/Components/CardCarousel/Carousel'
import MovieCard from '@/Components/CardCarousel/MovieCard'
import { useConstants } from '@/context/constants'


import React, { useEffect, useState } from 'react'

export default function FetchSciFi() {



    const [scifi, setScifi] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&with_genres=878`)
            .then(res => res.json())
            .then(data => {
                setScifi(data.results)
                // console.table(data.results);
            }
            )
            .catch(err => {
                setError(err)
            })

    }, [])


    return (
        <>
            <Box >

                {
                    error && (
                        error
                    )
                }

                {
                    scifi.length > 0 && (

                        <>

                            <Text fontSize={'2xl'} fontWeight={'thin'} mb={4}>
                                Top Sci-Fi
                            </Text>
                            <Carousel >
                                {
                                    scifi.map((scifi, index) => {
                                        return (

                                            <MovieCard
                                                key={scifi.id}
                                                title={scifi.title}
                                                overview={scifi.overview}
                                                poster={scifi.poster_path}
                                                id={scifi.id}
                                                rating={scifi.vote_average}
                                                release_date={scifi.release_date}

                                            />

                                        )
                                    })
                                }
                            </Carousel>

                        </>
                    )
                }

            </Box>


        </>
    )
}
