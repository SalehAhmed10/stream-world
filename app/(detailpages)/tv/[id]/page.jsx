import AppSkeleton from "@/Components/AppSkeleton"
import DetailPage from "@/Components/DetailPage/DetailPage"
import { Suspense } from "react"


export default async function page({ params }) {

    const { id } = params


    return (
        <>

            {/* <h1>Tv Page</h1>
            <h2>{id}</h2> */}
            {/* <Suspense fallback={AppSkeleton}> */}
                <DetailPage tvId={id} />
            {/* </Suspense> */}
        </>
    )


}