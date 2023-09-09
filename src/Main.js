import * as React from 'react';
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Container from '@mui/material/Container'
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Schriftkultur
import rtlPlugin from 'stylis-plugin-rtl'
import { prefixer } from 'stylis';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

// Navigation
import { useLoaderData } from 'react-router-dom';

// Sprachen
import languages from './Languages.json'

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

export async function loader({ params }) {
    let lang = await languages.find(s => s.code === params.langID);
    if (lang === undefined) {
        lang = languages.find(s => s.code === "en");
    }
    return { lang };
}

export default function Main() {
    const { lang } = useLoaderData();
    React.useEffect(() => { document.dir = lang.dir }, [lang.dir]);

    return (
        <CacheProvider value={(lang.dir === "ltr") ? emptyCache : cacheRtl}>
            < ThemeProvider theme={darkTheme} >
                <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <Header language={lang} />
                    <Content />
                    <Footer />
                </Container>
            </ThemeProvider >
        </CacheProvider>
    );
}