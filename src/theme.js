import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#183251",
        },
        secondary: {
            main: "#597f97",
        },
        text: {
            primary: "#fbfbfb",
            secondary: "#29281c",
            disabled: "#6c747c",
        }
    },
    typography: {
        fontFamily: [
            'Poppins',
            'cursive'
        ].join(','),
    },
    overrides: {
        MuiTextField: {
            root: {
                '& label.Mui-focused': {
                    color: "#183251",
                },
                '& .MuiInput-underline:after': {
                    borderBottomColor: "#183251",
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: "#c4cbd8",
                    },
                    '&:hover fieldset': {
                        borderColor: '#183251',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: "#183251",
                    },
                },
            },
        },
        MuiInputBase: {
            input: {
                color: "#29281c",
            }
        },
        MuiAccordion: {
            root: {
                color: "#29281c",
            }
        }
    }
})

export default theme;