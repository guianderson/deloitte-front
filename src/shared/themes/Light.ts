import { createTheme } from '@mui/material/styles';

export const Light = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
            dark: '#004ba0',
            light: '#4791db',
            contrastText: '#fff',
        },
        secondary: {
            main: '#26890D',
            dark: '#00600A',
            light: '#4CAF50',
            contrastText: '#fff',
        },
        background: {
            default: '#f4f6f8',
            paper: '#fff',
        },
        mode: 'light',
    },
});