"use client"

import FetchHorror from '@/Components/ExplorePage/calls/movies/FetchHorror'
import { FetchPopular } from '@/Components/ExplorePage/calls/movies/FetchPopular'
import React from 'react'

export default function page() {
    return (
        <div>
            <FetchPopular />
            {/* <FetchHorror /> */}
        </div>
    )
}
