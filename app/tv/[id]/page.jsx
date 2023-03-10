import DetailPage from "@/Components/DetailPage/DetailPage"


export default function page({ params }) {

    const { id } = params


    return (
        <>

            <h1>Tv Page</h1>
            <h2>{id}</h2>

            <DetailPage tvId={id} />
        </>
    )


}