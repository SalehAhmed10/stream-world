import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from '@chakra-ui/react';


export default function VideoCarousel({ children }) {



    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,

        arrows: true,
        responsive: [

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: true,
                    touchThreshold: 10,
                    waitForAnimate: true,
                }
            },
        ]
    }






    return (
        <Container
            maxW="container.xl"
            p='0 20px'
            w="95%"
            h="100%"

        >

            <Slider {...settings}>
                {children}
            </Slider>
        </Container>
    )
}
