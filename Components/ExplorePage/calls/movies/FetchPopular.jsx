"use client"

import React, { useEffect, useState } from 'react'
// import { useConstants } from '../../../context/constants'
import { useConstants } from '@/context/constants'

// import MovieCard from '../../CardCarousel/MovieCard'
import MovieCard from '@/Components/CardCarousel/MovieCard'
import { Box, Container, Skeleton, Slide, Text } from '@chakra-ui/react'
// import Carousel from '../../CardCarousel/Carousel'
import Carousel from '@/Components/CardCarousel/Carousel'
import AppSkeleton from '@/Components/AppSkeleton'


export const FetchPopular = () => {



    const [popular, setPopular] = useState([])
    const [error, setError] = useState(null)


    const fetchPopular = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
        const data = await response.json()

        if (!response.ok) {
            setError(data)
        } else {

            setPopular(data.results)
            // console.log(data.results)
        }

    }


    useEffect(() => {
        fetchPopular()

    }, [])

    return (
        <div>
            {/* {popular.map((popular) => {
                return (
                    <div key={popular.id}>
                        <h1>{popular.title}</h1>
                        <p>{popular.overview}</p>
                    </div>

                )
            })} */}



            <Box >
                {
                    error && (
                        <AppSkeleton />
                    )
                }

                {popular.length > 0 && (

                    <>
    
                        <Text fontSize={'2xl'} fontWeight={'thin'} mb={4}>
                            Now Playing Movies
                        </Text>

                        <Carousel>

                            {popular.map((popular) => {
                                return (
                                    <MovieCard
                                        key={popular.id}
                                        title={popular.title}
                                        overview={popular.overview}
                                        poster={popular.poster_path}
                                        id={popular.id}
                                        rating={popular.vote_average}
                                        release_date={popular.release_date}
                                    />
                                )
                            })

                            }

                        </Carousel>

                    </>
                )
                }


            </Box>

        </div>
    )
}
