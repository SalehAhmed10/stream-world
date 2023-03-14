"use client"

import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Container, Image, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useConstants } from '@/context/constants'
import VideoCarousel from "../CardCarousel/VideoCarousel";
import AppSkeleton from "../AppSkeleton";
// import VideoPlayer from "./VideoPlayer"; lazy import
const VideoPlayer = React.lazy(() => import('./VideoPlayer'))


export default function DetailPage({ movieId, tvId }) {

    const [detail, setDetail] = useState([]);

    const [detailVideos, setDetailVideos] = useState([]);

    const getSearchParam = usePathname()

    const isMovie = getSearchParam.includes("movie")

    const isTv = getSearchParam.includes("tv")

    const { noImage } = useConstants()

    const checkMediaType = (isTv, isMovie) => {
        if (isTv) {
            return 'tv'
        } else if (isMovie) {
            return 'movie'
        }
    }

    // check if there is poster image
    const checkPoster = (detail, size) => {
        if (detail.poster_path) {
            return `https://image.tmdb.org/t/p/${size}/${detail.poster_path}`
        } else {
            return noImage
        }
    }

    useEffect(() => {
        const fetchDetail = async () => {
            const apiKey = process.env.NEXT_PUBLIC_API_KEY
            // fetch using id to get movie or tv show details
            const response = await fetch(`https://api.themoviedb.org/3/${checkMediaType(isTv, isMovie)}/${movieId || tvId}?api_key=${apiKey}&language=en-US&append_to_response=videos`)
            const data = await response.json()
            setDetail(data)
            console.log(data)
            setDetailVideos(data.videos.results)
        }
        fetchDetail()

    }, [isMovie, isTv, movieId, tvId])


    return (
        <>

            {detail ? (
                <>
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
                                // src={`https://image.tmdb.org/t/p/w1280/${detail.poster_path}`}
                                src={checkPoster(detail, 'w1280')}
                                alt={detail.title}
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
                                objectPosition='center center'

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

                            padding={{
                                base: '0 20px',
                                sm: '0 10px',
                                md: '0 20px',
                                lg: '0 20px',

                            }}
                        >
                            <Image
                                // src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`}
                                src={checkPoster(detail, 'w300')}
                                alt={detail.title}
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
                                    textAlign={{
                                        base: 'center',
                                        sm: 'center',
                                        md: 'left',
                                        lg: 'left',
                                        xl: 'left',

                                    }}

                                >
                                    {detail.title || detail.name}
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
                                    {detail.genres && detail.genres.map((genre, index) => {
                                        return (
                                            <Box key={index}
                                                // theme color mode
                                                //  backdropFilter='blur(16px) saturate(180%)'
                                                // webkitBackdropFilter='blur(16px) saturate(180%)'
                                                // backdropFilter={useColorModeValue('blur(16px) saturate(180%)', 'blur(16px) saturate(360%)')}
                                                border='1px solid rgba(209,213,219,.3)'
                                                borderRadius='8px'
                                                cursor='pointer'
                                                display='inline-flex'
                                                fontSize='10px'
                                                marginLeft='3px'
                                                marginTop='3px'
                                                padding='7px 10px'
                                                transition='all 0.3s ease-in-out'
                                                className="span-hover"
                                            // _hover={{
                                            //     backgroundColor: useColorModeValue('rgba(209,213,219,.3)', 'rgba(209,213,219,.3)'),
                                            //     color: useColorModeValue('black', 'white'),
                                            // }}
                                            >
                                                {genre.name}
                                                {index < detail.genres.length - 1 ? " " : ""}
                                            </Box>
                                        )
                                    })}

                                </Text>
                            </Box>
                        </Box>

                    </section>
                    <section>


                        <Box
                            padding={{
                                base: '0 0px',
                                sm: '0 10px',
                                md: '0 20px',
                                lg: '0 20px',
                            }}
                        >
                            <Box py={
                                {
                                    base: '20px',
                                    sm: '20px',
                                    md: '30px',
                                    lg: '30px',
                                    xl: '30px',
                                }
                            }>
                                <Text
                                    whiteSpace='pre-wrap'
                                    className="sectionHeading"
                                >
                                    Overview
                                </Text>

                                <Text
                                    className="sectionPara"
                                >
                                    {detail.overview}
                                </Text>
                            </Box>


                            <Box>
                                {detailVideos.length > 0 ? (

                                    <VideoCarousel slidesToShow={1} slidesToScroll={1}>
                                        {
                                            detailVideos.map((videos, index) => {
                                                return (

                                                    <VideoPlayer
                                                        key={index}
                                                        videoId={videos.key}
                                                        title={videos.name}
                                                        description={videos.description}

                                                    />
                                                )
                                            })
                                        }
                                    </VideoCarousel>
                                ) : (
                                    <Box
                                        display='flex'
                                        flexDirection='column'
                                        justifyItems={{
                                            base: 'center',
                                            sm: 'center',

                                        }}
                                        alignItems={{
                                            base: 'center',
                                            sm: 'center',

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
                                            textAlign={{
                                                base: 'center',
                                                sm: 'center',
                                                md: 'left',
                                                lg: 'left',
                                                xl: 'left',

                                            }}

                                        >
                                            No Videos Found
                                        </Text>
                                    </Box>
                                )}

                            </Box>
                        </Box>
                    </section>
                </>
            ) : (
                <>
                    <AppSkeleton />
                </>
            )}

        </>
    )
}


