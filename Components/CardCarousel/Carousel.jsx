import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";

export default function Carousel({ children }) {

    {
        var settings = {

            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            dots: false,
            arrows: true,


            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: false,
                        arrows: false,


                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        arrows: false,


                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                        smoothScrolling: true,
                        swipeToSlide: true,
                        touchMove: true,
                        touchThreshold: 10,
                        dots: false,
                        arrows: false,
                        waitForAnimate: true,
                        zIndex: 1,

                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                        waitForAnimate: true,
                        zIndex: 1,
                    }
                },

            ]
        };
        return (
            <Container
                maxW="container.xl"
                p={0}

                w="100%"
                h="100%"
            // overflow="hidden"

            >

                <Slider {...settings}>
                    {children}
                </Slider>
            </Container>
        );
    }
}

