"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


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

    }, [movieId, tvId])


    return (
        <>
            <h1>Detail Page</h1>
            <h1>
                {isMovie || isTv ? "Movie" : "Tv"}
            </h1>

            <h2>{data.title || data.name}</h2>
            <p>{data.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} width={1000} height={1000} loading="lazy" />

        </>
    )
}









// import Image from 'next/image';
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
