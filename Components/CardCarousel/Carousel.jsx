import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";
import { useSideBarToggle } from "@/context/SideBarToggle";

export default function Carousel({ children }) {
    const { isSideBarOpen, setIsSideBarOpen } = useSideBarToggle();
    {
        // var settings = {

        //     infinite: false,
        //     speed: 500,
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     initialSlide: 0,
        //     dots: false,
        //     arrows: true,


        //     responsive: [
        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 3,
        //                 infinite: true,
        //                 dots: false,
        //                 arrows: false,


        //             }
        //         },
        //         {
        //             breakpoint: 600,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 2,
        //                 initialSlide: 2,
        //                 dots: false,
        //                 arrows: false,


        //             }
        //         },
        //         {
        //             breakpoint: 480,
        //             settings: {
        //                 slidesToShow: 2,
        //                 slidesToScroll: 1,

        //                 smoothScrolling: true,
        //                 swipeToSlide: true,
        //                 touchMove: true,
        //                 touchThreshold: 10,
        //                 dots: false,
        //                 arrows: false,
        //                 waitForAnimate: true,
        //                 zIndex: 1,

        //             }
        //         },
        //         {
        //             breakpoint: 320,
        //             settings: {
        //                 slidesToShow: 1,
        //                 slidesToScroll: 1,
        //                 dots: false,
        //                 arrows: false,
        //                 waitForAnimate: true,
        //                 zIndex: 1,
        //             }
        //         },

        //     ]
        // };
        var settings = {
            infinite: false,
            speed: 500,
            // if sidebar is open then set the slides to show to 4 else 5
            slidesToShow: isSideBarOpen ? 6 : 9,
            slidesToScroll: isSideBarOpen ? 4 : 9,
            initialSlide: 0,
            dots: false,
            arrows: true,
            smoothScrolling: true,
            touchMove: true,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: isSideBarOpen ? 5 : 6,
                        slidesToScroll: isSideBarOpen ? 5 : 5,
                        infinite: false,
                        dots: false,
                        arrows: true,

                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        
                        slidesToShow: isSideBarOpen ? 4 : 4,
                        slidesToScroll: isSideBarOpen ? 4 : 4,
                        infinite: false,
                        dots: false,
                        arrows: true,

                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: isSideBarOpen ? 3 : 3,
                        slidesToScroll: 3,
                        infinite: false,
                        dots: false,
                        arrows: true,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: isSideBarOpen ? 2 : 2,
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
        }



        return (
            <Container
                // maxW="container.2xl"
                maxW="container.2xl"
                p={0}
                w={{
                    base: "100%",
                    sm: "95%",
                    md: "90%",
                    lg: "100%",
                    xl: "100%",
                }}
                h="100%"
            // overflow="hidden"

            >

                <Slider {...settings}>
                    {children}
                </Slider>
            </Container>
            // <Container
            //     maxW="container.2xl"
            //     p={0}

            //     w="100%"
            //     h="100%"
            // // overflow="hidden"

            // >

            //     <Slider {...settings}>
            //         {children}
            //     </Slider>
            // </Container>
        );
    }
}

