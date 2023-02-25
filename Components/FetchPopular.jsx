"use client"

import React, { useEffect, useState } from 'react'
import { useConstants } from '../context/constants'

import MovieCard from './CardCarousel/MovieCard'
import { Box, Container, Slide, Text } from '@chakra-ui/react'
import Carousel from './CardCarousel/Carousel'


export const FetchPopular = () => {

    const { apiKey } = useConstants()

    const [popular, setPopular] = useState([])


    const fetchPopular = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`)
        const data = await response.json()
        setPopular(data.results)
        console.log(data.results)
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
                <Text fontSize={'2xl'} fontWeight={'bold'} mb={4}>
                    Popular Movies
                </Text>

                {
                    popular.length > 0 && (
                        <Carousel slidesToShow={3} slidesToScroll={3}>

                            {popular.map((popular) => {
                                return (
                                    <MovieCard
                                        key={popular.id}
                                        title={popular.title}
                                        overview={popular.overview}
                                        poster={popular.poster_path}
                                    />
                                )
                            })

                            }
                        </Carousel>
                    )
                }


            </Box>

        </div>
    )
}
