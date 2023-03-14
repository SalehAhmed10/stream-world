import { Box } from '@chakra-ui/react'
import React from 'react'

export default function VideoPlayer({ videoId }) {

    return (
        <Box
            height={{
                base: "200px",
                md: "300px",
                lg: "400px",
                xl: "500px",
            }}
            width={{
                base: "100%",
                md: "100%",
                lg: "100%",
                xl: "100%",
            }}

            borderRadius="20px"



        >
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                width="100%"
                height="100%"
                crossOrigin="anonymous"
                style={{
                    borderRadius: "20px",
                }}
            >
            </iframe>

        </Box>

    )
}
