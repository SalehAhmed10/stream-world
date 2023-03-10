import DetailPage from "@/Components/DetailPage/DetailPage"

export default async function page({ params }) {

    const { id } = params

    return (
        <>
            <h1>Movie Page</h1>
            <h2>{id}</h2>
            <DetailPage movieId={id} />

        </>
    )


}