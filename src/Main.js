import * as React from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import { ThemeProvider, createTheme } from '@mui/material/styles';

import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const darkTheme = createTheme({
    direction: 'rtl',
    palette: {
        mode: 'dark',
        background:
        {
            default: '#565554',
            paper: '#565554',
        }
    },
});

const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

const emptyCache = createCache({
    key: "meaningless-key",
});

export default function Main() {
    const [direction, setDirection] = React.useState("ltr");

    React.useEffect(() => { document.dir = direction }, [direction]);

    return (
        <CacheProvider value={(direction === "ltr") ? emptyCache : cacheRtl}>
            < ThemeProvider theme={darkTheme} >
                <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Header setDirection={setDirection} />
                    <Content />
                    <Footer />
                </Container>
            </ThemeProvider >
        </CacheProvider>
    );
}