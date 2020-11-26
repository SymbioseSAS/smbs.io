import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon//apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                    <link rel="shortcut icon" href="/favicon/favicon.ico" />
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f8485e"/>
                    <link rel="apple-touch-icon" href="/favicon/logo192.png" />
                    <meta property="og:image" content={""} /* TODO: og:image URL */ />
                </Head>
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
