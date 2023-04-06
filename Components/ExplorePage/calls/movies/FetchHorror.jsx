"use client"

import React, { useEffect, useState } from 'react'
import { Box, Container, Slide, Text } from '@chakra-ui/react'
import Carousel from '@/Components/CardCarousel/Carousel'
import MovieCard from '@/Components/CardCarousel/MovieCard'
import { useConstants } from '@/context/constants'



export default function FetchHorror() {
    //https://api.themoviedb.org/3/discover/movie?

    // try {
    //     const fetchHorror = async () => {
    //         const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`)
    //         const data = await response.json()
    //         setHorror(data.results)

    //     }

    // }
    // catch (err) {
    //     console.error(err)
    // }



    const [horror, setHorror] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`)
            .then(res => res.json())
            .then(data => {
                setHorror(data.results)
                // console.table(data.results);
            }
            )
            .catch(err => {
                setError(err)
            }
            )
    }, [])


    return (
        <>
            <Box>
                {
                    error && (
                        error
                    )
                }



                {horror.length > 0 && (

                    <>
                        <Text fontSize={'2xl'} fontWeight={'thin'} mb={4}>
                            Horror Movies
                        </Text>
                        <Carousel >
                            {horror.map((horror) => {
                                return (
                                    <MovieCard
                                        key={horror.id}
                                        title={horror.title}
                                        overview={horror.overview}
                                        poster={horror.poster_path}
                                        id={horror.id}
                                        rating={horror.vote_average}
                                        release_date={horror.release_date}
                                    />
                                )
                            }
                            )}
                        </Carousel>

                    </>
                )
                }

            </Box>
        </>
    )
}
