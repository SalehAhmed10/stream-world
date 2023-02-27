import { mode } from '@chakra-ui/theme-tools'

const config = {
    initialColorMode: 'dark  || system ',
    useSystemColorMode: true,


  }

const globalStyles = {
    global: (props) => ({
        body: {
            bg: mode('light.bg', '#0a1016')(props),
            color: mode('light.text', 'dark.text')(props),

        },

        '.primary': {
            bg: mode('gray.900', 'rgba(255, 255, 255, 0.07)')(props),
            color: mode('black', 'white')(props),
        },


        '.second': {
            bg: mode('gray.500', 'rgba(255, 255, 255, 0.05)')(props),
            color: mode('black', 'white')(props),
        },

    }),

}

const fonts = {
    // use DM Sans as the default font
    body: "sans-serif" || "Poppins",


    heading: "sans-serif" || " Poppins",
    mono: "sans-serif" || "Poppins",
}



// colors border color in dark mode with red instead of blue  (default)
const colors = {
    light: {
        bg: '#f5f5f5',
        text: '#000',
        borderColor: 'blue',
    },
    dark: {
        bg: '#0a1016',
        text: '#fff',
        borderColor: 'red',
    },
}


export { globalStyles, fonts, colors , config }







// const styles = {
//     global: (props) => ({
//         body: {
//             bg: mode('light.bg', '#0a1016')(props),
//             color: mode('light.text', 'dark.text')(props),
//             // fontfamily open sans
//             fontFamily: 'Open Sans',

//             // border color
//             borderColor: mode('blue', 'red')(props),

//         },


//         '.primary': {
//             bg: mode('gray.900', 'rgba(255, 255, 255, 0.07)')(props),
//             color: mode('black', 'white')(props),
//         },


//         '.second': {
//             bg: mode('gray.500', 'rgba(255, 255, 255, 0.05)')(props),
//             color: mode('black', 'white')(props),
//         },


//     }),

// }

// export default styles

