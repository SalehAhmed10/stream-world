import { AspectRatio } from '@chakra-ui/react'
import React from 'react'
import PropTypes from "prop-types";

export default function VideoPlayer({ videoId }) {


    // cockie same site none youtube emebed fix this is a hack


    return (
        <AspectRatio ratio={16 / 9}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}`}

                allowFullScreen
                title="Embedded youtube"
                style={{
                    borderRadius: "20px",
                }}
            />
        </AspectRatio>

    )
}

VideoPlayer.protoTypes = {
    videoId: PropTypes.string.isRequired,
}
