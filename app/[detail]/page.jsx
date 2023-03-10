import DetailPage from "@/Components/DetailPage/DetailPage";
import Image from "next/image";



export default async function page({ params }) {

    const { detail } = params
    console.log(detail);

    return (
        <article>

            <DetailPage
                detail={detail}


            />
            {/* {data && (
                <div>
                    <div className="movie-info">
                        <div className="movie-poster">
                            <Image
                                src={`${ImageUrl}${data.poster_path}`}
                                alt={data.title}
                                width={150}
                                height={70}
                                loading="lazy"
                            />

                            <h1>
                                {data.title}
                            </h1>
                        </div>
                    </div>
                </div>
            )} */}

            {/* <div className="watch-movie">
                <iframe src={`https://www.2embed.to/embed/tmdb/movie?id=${movie}`} width="100%" height="100%" frameborder="0" allowfullscreen="true" allow="autoplay"></iframe>
            </div> */}
        </article>
    )
}