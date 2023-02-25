import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "@chakra-ui/react";

export default function Carousel({ children }) {

    {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true,
                        arrows: true,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        smoothScrolling: true,
                        swipeToSlide: true,
                    }
                }
            ]
        };
        return (
            <Container
                maxW="container.xl"
                p={0}
                m={0}
                w="100%"
                h="100%"
                overflow="hidden"

            >

                <Slider {...settings}>
                    {children}
                </Slider>
            </Container>
        );
    }
}


// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Carousel({ children }) {

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,
//                     initialSlide: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 5
//                 }
//             }
//         ]
//     };

//     return (
//         <div>
//             <h2> Responsive </h2>
//             <Slider {...settings}>
//                 {children}
//             </Slider>
//         </div>
//     );

// }




// // import React from 'react'
// // import Slider from 'react-slick'
// // // import "~slick-carousel/slick/slick.css";
// // // import "~slick-carousel/slick/slick-theme.css";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import { motion } from 'framer-motion'
// // import { Box } from '@chakra-ui/react';


// // export default function Carousel({ children, slidesToShow, slidesToScroll }) {

// //     var settings = {
// //         dots: true,
// //         infinite: false,
// //         speed: 500,
// //         slidesToShow: slidesToShow,
// //         slidesToScroll: slidesToScroll,
// //         initialSlide: 0,
// //         responsive: [
// //             {
// //                 breakpoint: 1024,
// //                 settings: {
// //                     slidesToShow: 3,
// //                     slidesToScroll: 3,
// //                     infinite: true,
// //                     dots: true
// //                 }
// //             },
// //             {
// //                 breakpoint: 600,
// //                 settings: {
// //                     slidesToShow: 2,
// //                     slidesToScroll: 2,
// //                     initialSlide: 2
// //                 }
// //             },
// //             {
// //                 breakpoint: 480,
// //                 settings: {
// //                     slidesToShow: 2,
// //                     slidesToScroll: 2
// //                 }
// //             }
// //         ]
// //     };
// //     return (
// //         // <motion.div
// //         //     _dragY={{ opacity: 0.5 }}
// //         //     initial={{ opacity: 0 }}
// //         //     animate={{ opacity: 1 }}
// //         //     exit={{ opacity: 0 }}

// //         // >

// //         <Box w={{
// //             base: "100%",
// //             md: "100%",
// //             lg: "100%",
// //             xl: "100%",
// //         }} >

// //             <Slider {...settings}>
// //                 {children}
// //             </Slider>
// //         </Box >
// //         // </motion.div>
// //     )
// // }

// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";
// // import { motion } from 'framer-motion'
// // import { Box } from '@chakra-ui/react';




// // export default function Carousel({ children }) {
// //     var settings = {


// //         infinite: false,
// //         dots: true,
// //         speed: 500,
// //         slidesToShow: 4,
// //         slidesToScroll: 4,
// //         initialSlide: 0,
// //         responsive: [
// //             {
// //                 breakpoint: 1024,
// //                 settings: {
// //                     slidesToShow: 3,
// //                     slidesToScroll: 3,
// //                     infinite: true,
// //                     dots: true,
// //                 }
// //             },
// //             {
// //                 breakpoint: 600,
// //                 settings: {
// //                     slidesToShow: 2,
// //                     slidesToScroll: 2,
// //                     initialSlide: 2,
// //                     dots: false,

// //                 }
// //             },
// //             {
// //                 breakpoint: 480,
// //                 settings: {
// //                     slidesToShow: 2,
// //                     slidesToScroll: 1,
// //                     initialSlide: 2,
// //                     dots: false,
// //                     arrows: false,

// //                 }
// //             }
// //         ]
// //     };
// //     return (
// //         <Box mx={
// //             {

// //                 sm: '0',
// //                 md: '0',
// //                 lg: '2',
// //             }

// //         }>
// //             <h2>Custom Arrows</h2>
// //             <Slider {...settings}>
// //                 {children}
// //             </Slider>
// //         </Box>
// //     );
// // }
