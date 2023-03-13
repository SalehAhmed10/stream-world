"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";


export default function DetailPage({ movieId, tvId }) {

    const [data, setData] = useState([]);

    const getSearchParam = usePathname()

    const isMovie = getSearchParam.includes("movie")

    const isTv = getSearchParam.includes("tv")

    const checkMediaType = (isTv, isMovie) => {
        if (isTv) {
            return 'tv'
        } else if (isMovie) {
            return 'movie'
        }
    }



    useEffect(() => {
        const fetchData = async () => {
            const apiKey = process.env.NEXT_PUBLIC_API_KEY
            // fetch using id to get movie or tv show details
            const response = await fetch(`https://api.themoviedb.org/3/${checkMediaType(isTv, isMovie)}/${movieId || tvId}?api_key=${apiKey}&language=en-US`)
            const data = await response.json()
            setData(data)
            console.log(data)
        }
        fetchData()

    }, [isMovie, isTv, movieId, tvId])


    return (
        <>

            {data && (
                <section>

                    <Box
                        height={{
                            base: '50vh',
                        }}
                        width={{
                            base: '100%'
                        }}
                        background='transparent'
                        transition='all 0.3s ease-in-out'
                        // margin-bottom: 25px;
                        marginBottom='25px'
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`} alt={data.title}
                            width={{
                                base: "100%",
                                md: "100%",
                                sm: "100%",
                            }}
                            height={{
                                base: "100%",
                                md: "100%",
                                sm: "100%",

                            }}
                            objectFit='cover'
                            borderRadius='2xl'
                            transition='all 0.3s ease-in-out'
                            loading="lazy"
                        />
                    </Box>

                    <Box
                        display='grid'
                        gridTemplateColumns={{
                            base: '1fr',
                            sm: '1fr',
                            md: 'auto 1fr ',
                            lg: 'auto 1fr ',
                            xl: 'auto 1fr ',
                        }}
                        gap={{
                            base: '10px',
                            sm: '10px',
                            md: '20px',

                        }}
                        alignItems={{
                            base: 'center',
                            sm: 'center',
                            md: 'flex-end',
                            lg: 'flex-end',
                            xl: 'flex-end',
                        }}
                        justifyItems={{
                            base: 'center',
                            sm: 'center',
                            md: 'flex-start',
                            lg: 'flex-start',
                            xl: 'flex-start',
                        }}
                        al
                        padding={{
                            base: '0 20px',
                            sm: '0 10px',
                            md: '0 20px',
                            lg: '0 20px',

                        }}
                    >
                        <Image
                            src={`https://image.tmdb.org/t/p/w300/${data.poster_path}`}
                            alt={data.title}
                            borderRadius='30px'
                            boxShadow='0 8px 16px 0 rgb(0 0 0 / 30%)'
                            height={{
                                base: '285px',
                                md: '285px',
                                sm: '285px',
                                lg: '285px',
                            }}
                            marginTop='-140px'
                            minHeight='285px'
                            width={{
                                base: '190px',
                                md: '190px',
                                sm: '190px',
                                lg: '190px',
                            }}
                            zIndex='9'
                        />

                        <Box
                            display='flex'
                            flexDirection='column'
                            justifyItems={{
                                base: 'center',
                                sm: 'center',
                                md: 'flex-start',
                                lg: 'flex-start',
                                xl: 'flex-start',
                            }}
                            alignItems={{
                                base: 'center',
                                sm: 'center',
                                md: 'flex-start',
                                lg: 'flex-start',
                                xl: 'flex-start',

                            }}
                        >
                            <Text
                                fontSize={{
                                    base: '2xl',
                                    sm: '1xl',
                                    md: '2.5xl',
                                    lg: '4xl',
                                    xl: '4xl',
                                }}
                                fontWeight='700'
                                margin='5px 0'
                                whiteSpace='pre-wrap'
                            // textAlign='center'

                            >
                                {data.title || data.name}
                            </Text>

                            <Text
                                fontSize={{
                                    base: '15px',
                                    sm: '15px',
                                    md: '15px',
                                    lg: '15px',
                                    xl: '15px',

                                }}
                                fontWeight='400'
                                margin='5px 0 15px 0'
                                whiteSpace='pre-wrap'
                                textAlign={{
                                    base: 'center',
                                    sm: 'center',
                                    md: 'left',
                                    lg: 'left',
                                    xl: 'left',
                                }}
                            >
                                {/* category */}
                                {data.genres && data.genres.map((genre, index) => {
                                    return (
                                        <Box key={index}
                                            // theme color mode
                                            //  backdropFilter='blur(16px) saturate(180%)'
                                            webkitBackdropFilter='blur(16px) saturate(180%)'
                                            backdropFilter={useColorModeValue('blur(16px) saturate(180%)', 'blur(16px) saturate(360%)')}

                                            border='1px solid rgba(209,213,219,.3)'
                                            borderRadius='8px'
                                            cursor='pointer'
                                            display='inline-flex'
                                            fontSize='10px'
                                            marginLeft='3px'
                                            marginTop='3px'
                                            padding='7px 10px'
                                        >
                                            {genre.name}
                                            {index < data.genres.length - 1 ? " " : ""}
                                        </Box>
                                    )
                                })}

                            </Text>
                        </Box>
                    </Box>

                    {/* <h1>Detail Page</h1>
        <h1>
            {isMovie || isTv ? "Movie" : "Tv"}
        </h1>

        <h2>{data.title || data.name}</h2>
        <p>{data.overview}</p> */}
                </section>

            )}

        </>
    )
}









// import Image from 'next /image';
// import React, { useEffect, useState } from 'react'

// export default function DetailPage({ detail }) {

//     // const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const apiKey = process.env.NEXT_PUBLIC_API_KEY
//             // fetch(`https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`)
//             // const response = await fetch(`https://api.themoviedb.org/3/movie/${detail}?api_key=${apiKey}&language=en-US`)
//             // multi search api using id to get movie or tv show details
//             const response = await fetch(`https://api.themoviedb.org/3/movie/${detail}?api_key=${apiKey}&language=en-US`)
//             const data = await response.json()
//             setData(data)
//         }
//         fetchData()
//     }, [detail])


//     console.log(data);

//     return (
//         <div>
//             <h1>Detail Page</h1>
//             <h2>{data.title}</h2>
//             <p>{data.overview}</p>
//             <Image src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} width={150} height={70} loading="lazy" />
//         </div>
//     )
// }
