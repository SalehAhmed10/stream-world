"use client"

import { Box, Grid, Text } from '@chakra-ui/react';

import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import AppSkeleton from '../AppSkeleton';
const MovieCard = React.lazy(() => import('../CardCarousel/MovieCard'))

function SearchPage() {
    const searchParams = useSearchParams();
    const query = searchParams.get('query');


    const [results, setResult] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setResult([])
        setTotalPages(0)
        setCurrentPage(1)
    }, [query])

    const fetchResults = async (page) => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY
        const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`)
        const data = await response.json()
        setResult((prevResults) => [...prevResults, ...data.results])
        setTotalPages(data.total_pages)
        console.log(data)
        console.log(data.results)
    }

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    useEffect(() => {
        fetchResults(currentPage)
    }, [currentPage, query])

    return (
        <div>
            <Box display={'flex'} flexDirection={'column'} pb={5}>
                <Text fontSize={{
                    base: '1rem',
                    sm: '1rem',
                    md: '1rem',
                    lg: '1.5rem',
                    xl: '1.5rem',
                }} fontWeight="bold" color={'gray.500'}>
                    Search Results for {query}
                </Text>
                <Text
                    // color lightgray
                    color={'gray.500'}
                    fontSize={{
                        base: '0.7rem',
                        sm: '0.7rem',
                        md: '0.7rem',
                        lg: '0.8rem',
                        xl: '0.8rem',
                    }}
                    fontWeight="thin"
                >
                    Showing {results.length} results
                </Text>
            </Box>

            {results.length > 0 && (
                <>
                    <InfiniteScroll
                        dataLength={results.length}
                        next={handleLoadMore}
                        hasMore={currentPage < totalPages}
                        loader={<h4>Loading...</h4>}
                        style={{
                            overflow: 'hidden',
                            height: '100%',
                            width: '100%',
                            // margin: '0 auto',
                            // padding: '0',
                            // display: 'flex',
                            // flexDirection: 'column',
                            // justifyContent: 'center',
                            alignItems: 'center',
                            overflowY: 'hidden',
                            overflowX: 'hidden',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',

                        }}

                        endMessage={
                            <Text
                                color={'gray.500'}
                                sticky="bottom"
                                style={{
                                    textAlign: 'center',
                                    fontSize: '1rem',
                                    fontWeight: 'thin',
                                    marginTop: '2rem',
                                }}
                            >
                                Yay! You have seen it all
                            </Text>
                        }
                    >

                        <Grid

                            templateColumns={{
                                base: 'repeat(2, 1fr)',
                                sm: 'repeat(2, 1fr)',
                                md: 'repeat(3, 1fr)',
                                lg: 'repeat(4, 1fr)',
                                xl: 'repeat(5, 1fr)',
                            }}
                            gap={6}
                        >
                            {results.map((item, index) => (
                                <Suspense fallback={<AppSkeleton />}
                                    key={index}
                                >
                                    <MovieCard
                                        id={item.id}
                                        title={item.title || item.name}
                                        // key={item.id}
                                        overview={item.overview}
                                        poster={item.poster_path}
                                        rating={item.vote_average}
                                        release_date={item.release_date}
                                        media_type={item.media_type}
                                        index={index}
                                        first_air_date={item.first_air_date}
                                    />
                                </Suspense>



                            ))}
                        </Grid>
                    </InfiniteScroll>

                </>
            )}

        </div>

    )
}
export default SearchPage