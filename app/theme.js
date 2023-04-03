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

        '.sectionHeading': {
            color: mode('#2f2f33', '#DADADA')(props),
            // bold
            fontWeight: 'bold',
            fontSize: '24px',
        },

        '.sectionPara': {
            color: mode('#808191', '#808191')(props),
            // bold
            fontWeight: '100',
            fontSize: '15px',
        },

        '.span-hover': {
            _hover: {
                backgroundColor: mode('rgba(209,213,219,.3)', 'rgba(209,213,219,.3)')(props),
                color: mode('black', 'white')(props),
            }
        }
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
        // text: '#000',
        text: '#2f2f33',
        borderColor: 'blue',
    },
    dark: {
        bg: '#0a1016',
        // secondary: '#1a202c',
        secondary: '#1a202c',

        // text: '#fff',
        text: '#f5f5f5',
        borderColor: 'red',
    },
}


export { globalStyles, fonts, colors, config }







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

