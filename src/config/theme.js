'use client';

import { createTheme } from '@mui/material/styles';
import poppins from './font';
import NextLink from 'next/link';
import { forwardRef } from 'react';

const LinkBehaviour = forwardRef(function LinkBehaviour(props, ref) {
    return <NextLink ref={ref} {...props} />;
});

const theme = createTheme({
    typography: {
        fontFamily: poppins.style.fontFamily,
    },
    components: {
        MuiLink: {
            defaultProps: {
                component: LinkBehaviour,
            },
        },
        MuiButtonBase: {
            defaultProps: {
                LinkComponent: LinkBehaviour,
            },
        },
    },
    palette: {
        primary: {
            main: '#1976d2',
            light: '#3787d6',
        },
        secondary: {
            main: '#9c27b0',
            light: '#b055c0',
        },
    },
});

export default theme;
