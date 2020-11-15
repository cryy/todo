import { createMuiTheme } from '@material-ui/core/styles';

export const light = createMuiTheme({
    typography: {
        fontFamily: "'Nunito', sans-serif"
    },
    palette: {
        primary: {
            main: '#5786FF'
        },
        secondary: {
            main: '#E91E63'
        },
        background: {
            default: "#F2F2F2",
            paper: "#FFFFFF"
        },
        type: "light"
    },
    overrides: {
        MuiButton: {
            root: {
                fontWeight: 700
            }
        },
        MuiFilledInput: {
            underline: {
                '&:before': {
                    display: "none"
                }
            },
            root: {
                borderRadius: "4px"
            }
        },
        MuiTooltip: {
            tooltip: {
                fontSize: "13px"
            }
        }
    }
    
});

