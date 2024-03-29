import { extendTheme } from "@chakra-ui/react";
import '../fonts/fonts.css'
const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Roboto',
    },
    shadows: {
        outline: 'none',
    },

    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                _focus: {
                    boxShadow: 'none'
                }
            },
        },

    }
})

export default theme