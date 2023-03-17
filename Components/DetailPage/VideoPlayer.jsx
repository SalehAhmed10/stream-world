import { Box } from '@chakra-ui/react'
import React from 'react'
import PropTypes from "prop-types";

export default function VideoPlayer({ videoId }) {


    // cockie same site none youtube emebed fix this is a hack


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

        >
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videoId}`}

                allowFullScreen
                title="Embedded youtube"
                style={{
                    borderRadius: "20px",
                }}
            />
        </Box>

    )
}

VideoPlayer.protoTypes = {
    videoId: PropTypes.string.isRequired,
}
