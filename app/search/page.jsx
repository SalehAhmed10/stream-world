import SearchPage from '@/Components/SearchPage/SearchPage'
import React from 'react'

const page = ({
    params, searchParams
}) => {
    return (
        <div>

            <div>
                <SearchPage
                    searchParams={searchParams}
                    param={params}
                />
            </div>

        </div>
    )
}

export default page