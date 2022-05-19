import '../styles/globals.css'
import AppLayout from "../layout/AppLayout";
import Head from 'next/head'
import { meta } from './_document'

export default function MyApp({ Component, pageProps }) {
    return (
        <AppLayout>
            <Head>
                <title>{meta.title}</title>
            </Head>
            <Component {...pageProps} />
        </AppLayout>
    )
}
